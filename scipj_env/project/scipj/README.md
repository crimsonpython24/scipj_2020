## Respecting the import order in Python Files
**settings.py**
```python
# System libraries
import os
import re
from datetime import datetime

# Third-party libraries
import boto
from PIL import Image

# Django modules
from django.db import models
from django.conf import settings

# Django apps
from cms.models import Page

# Current-app modules
from . import app_settings
```
## Creating app configurations
**apps.py**
```python
from django.apps import AppConfig
from django.utils.translation import ugettext_lazy as _


class MagazineAppConfig(AppConfig):
    name = "magazine"
    verbose_name = _("Magazine")

    def ready(self):
        from . import signals
```
**__init__.py**
```python
default_app_config = "magazine.apps.MagazineAppConfig"
```
**signals.py**
```python
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.conf import settings

from .models import NewsArticle


@receiver(post_save, sender=NewsArticle)
def news_save_handler(sender, **kwargs):
    if settings.DEBUG:
        print(f"{kwargs['instance']} saved.")


@receiver(post_delete, sender=NewsArticle)
def news_delete_handler(sender, **kwargs):
    if settings.DEBUG:
        print(f"{kwargs['instance']} deleted.")
```
## Defining overwritable app settings
**app_settings.py**
```python
from django.conf import settings
from django.utils.translation import ugettext_lazy as _

SETTING1 = getattr(settings, "MAGAZINE_SETTING1", "default value")
MEANING_OF_LIFE = getattr(settings, "MAGAZINE_MEANING_OF_LIFE", 42)
STATUS_CHOICES = getattr(settings, "MAGAZINE_STATUS_CHOICES", (
    ("draft", _("Draft")),
    ("published", _("Published")),
    ("not_listed", _("Not Listed")),
))
```
**models.py**
```python
from django.db import models
from django.utils.translation import ugettext_lazy as _

from .app_settings import STATUS_CHOICES


class NewsArticle(models.Model):
    # ...
    status = models.CharField(_("Status"), max_length=20, choices=STATUS_CHOICES)
```
**settings.py**
```python
from django.utils.translation import ugettext_lazy as _

# ...

MAGAZINE_STATUS_CHOICES = (
    ("imported", _("Imported")),
    ("draft", _("Draft")),
    ("published", _("Published")),
    ("not_listed", _("Not Listed")),
    ("expired", _("Expired")),
)
```

```bash
pg_ctl -D "C:\Program Files\PostgreSQL\12\data" start
venv\Scripts\activate && cd scipj_env/project/scipj
webpack core\src\index\index.js -o dist\core\index\index.js
webpack hash\src\sample\layout.js -o dist\hash\sample\layout.js
webpack core\src\bulletin\index.js -o dist\core\bulletin\index.js
```
https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-14-04
