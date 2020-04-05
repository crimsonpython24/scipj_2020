from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.urls import reverse
from django.utils.text import slugify

from utils.models import (UrlMixin, CreationModificationDateMixin, MetaTagsMixin, MultilingualCharField,
                            MultilingualTextField)

class Algorithm(UrlMixin, CreationModificationDateMixin, MetaTagsMixin):
    class Meta: 
        verbose_name = _("Algorithm")
        verbose_name_plural = _("Algorithms")

    slug = models.SlugField(unique=True)
    name = models.CharField(_("Name"), max_length=100)
    description = models.TextField(_("Description"), max_length=1000)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name, allow_unicode=True)

    def __str__(self):
        return self.name

    def get_url_path(self):
        return reverse("hash-demo", kwargs={
            "slug": str(self.slug),
        })
