import os

from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.urls import reverse
from django.utils.timezone import now as timezone_now


def upload_to(instance, filename):
    now = timezone_now()
    base, ext = os.path.splitext(filename)
    ext = ext.lower()
    return f"hash/{now:%Y/%m/%Y%m%d%H%M%S}{ext}"


class IndexCard(models.Model):
    name = models.CharField(_("Name"), max_length=100)
    description = models.TextField(_("Description"), max_length=500)
    image = models.ImageField(_("Image"), upload_to=upload_to)

    def get_picture_paths(self):
        picture_path = None
        if self.image:
            picture_path = self.image.name
        return picture_path

    def __str__(self):
        return self.name
