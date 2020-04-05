from urllib.parse import urlparse, urlunparse

from django.conf import settings
from django.db import models
from django.template import loader
from django.utils.safestring import mark_safe
from django.utils.translation import ugettext_lazy as _
from django.utils.translation import get_language


class UrlMixin(models.Model):
    """
    A replacement for get_absolute_url() Models extending this mixin
    should have either get_url or get_url_path implemented.
    """
    class Meta:
        abstract = True

    def get_url(self):
        if hasattr(self.get_url_path, "dont_recurse"):
            raise NotImplementedError
        try:
            path = self.get_url_path()
        except NotImplementedError:
            raise
        website_host = getattr(settings, "SITE_HOST", "localhost:8000")
        return f"http://{website_host}/{path}"
    get_url.dont_recurse = True

    def get_url_path(self):
        if hasattr(self.get_url, "dont_recurse"):
            raise NotImplementedError
        try:
            url = self.get_url()
        except NotImplementedError:
            raise
        bits = urlparse(url)
        return urlunparse(("", "") + bits[2:])
    get_url_path.dont_recurse = True

    def get_absolute_url(self):
        return self.get_url_path()


class CreationModificationDateMixin(models.Model):
    """
    Abstract base class with a creation and modification date and time
    """
    class Meta:
        abstract = True

    created = models.DateTimeField(_("creation date and time"), auto_now_add=True)
    updated = models.DateTimeField(_("modification date and time"), auto_now=True)

class MetaTagsMixin(models.Model):
    """
    Abstract base class for generating meta tags
    """
    class Meta:
        abstract = True

    meta_keywords = models.CharField(_("Keywords"), max_length=255, blank=True, help_text=_("Separate keywords by comma."))
    meta_title = models.CharField(_("Title"), max_length=100, blank=True)
    meta_description = models.TextField(_("Description"), max_length=1000, blank=True)

    def get_meta(self, title, description):
        tag = ""
        if title and description:
            tag = loader.render_to_string('utils/meta.html', {
                'title': title,
                'description': description,
            })
        return mark_safe(tag)

    def get_meta_keywords(self):
        return self.get_meta('keywords', self.meta_keywords)

    def get_meta_title(self):
        return self.get_meta('title', self.meta_title)

    def get_meta_description(self):
        return self.get_meta('description', self.meta_description)

    def get_meta_tags(self):
        return mark_safe("\n".join((
            self.get_meta_keywords(),
            self.get_meta_title(),
            self.get_meta_description(),
        )))


class MultilingualField(models.Field):
    SUPPORTED_FIELD_TYPES = [models.CharField, models.TextField]

    def __init__(self, verbose_name=None, **kwargs):
        self.localized_field_model = None
        for model in MultilingualField.SUPPORTED_FIELD_TYPES:
            if issubclass(self.__class__, model):
                self.localized_field_model = model
        self._blank = kwargs.get("blank", False)
        self._editable = kwargs.get("editable", True)
        super().__init__(verbose_name, **kwargs)

    @staticmethod
    def localized_field_name(name, lang_code):
        lang_code_safe = lang_code.replace("-", "_")
        return f"{name}_{lang_code_safe}"

    def get_localized_field(self, lang_code, lang_name):
        _blank = (self._blank if lang_code == settings.LANGUAGE_CODE else True)
        localized_field = self.localized_field_model(
            f"{self.verbose_name} ({lang_name})",
            name=self.name,
            primary_key=self.primary_key,
            max_length=self.max_length,
            unique=self.unique,
            blank=_blank,
            null=False, # we ignore the null argument!
            db_index=self.db_index,
            default=self.default or "",
            editable=self._editable,
            serialize=self.serialize,
            choices=self.choices,
            help_text=self.help_text,
            db_column=None,
            db_tablespace=self.db_tablespace)
        return localized_field

    def contribute_to_class(self, cls, name, private_only=False, virtual_only=False):
        def translated_value():
            language = get_language()
            val = self.__dict__.get(
                MultilingualField.localized_field_name(name, language))
            if not val:
                val = self.__dict__.get(MultilingualField.localized_field_name(name, settings.LANGUAGE_CODE))
            return val

        # generate language-specific fields dynamically
        if not cls._meta.abstract:
            if self.localized_field_model:
                for lang_code, lang_name in settings.LANGUAGES:
                    localized_field = self.get_localized_field(lang_code, lang_name)
                    localized_field.contribute_to_class(cls, MultilingualField.localized_field_name(name, lang_code))
                setattr(cls, name, property(translated_value))
            else:
                super().contribute_to_class(cls, name, private_only, virtual_only)


class MultilingualCharField(models.CharField, MultilingualField):
    pass


class MultilingualTextField(models.TextField, MultilingualField):
    pass