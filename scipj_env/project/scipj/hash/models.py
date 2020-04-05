import os

from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.urls import reverse
from django.utils.timezone import now as timezone_now

from utils.models import (UrlMixin, CreationModificationDateMixin, MetaTagsMixin, MultilingualCharField,
                          MultilingualTextField)


def upload_to(instance, filename):
    now = timezone_now()
    base, ext = os.path.splitext(filename)
    ext = ext.lower()
    return f"hash/{now:%Y/%m/%Y%m%d%H%M%S}{ext}"


class Algorithm(UrlMixin, CreationModificationDateMixin, MetaTagsMixin):
    class Meta:
        verbose_name = _("Algorithm")
        verbose_name_plural = _("Algorithms")

    slug = models.SlugField(unique=True)
    name = models.CharField(_("Name"), max_length=100)
    subtitle = models.CharField(_("Subtitle"), max_length=200)
    paragraph1 = models.TextField(_("Description1"), max_length=350)
    paragraph2 = models.TextField(_("Description2"), max_length=350)
    paragraph3 = models.TextField(_("Description3"), max_length=350)
    image = models.ImageField(_("Image"), upload_to=upload_to)

    def __str__(self):
        return self.name

    def get_url_path(self):
        return reverse("hash-demo", kwargs={"slug": str(self.slug),})
