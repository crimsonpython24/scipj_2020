# Generated by Django 2.2.11 on 2020-04-09 13:14

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_bulletinboard_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='bulletinboard',
            name='date_created',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='Date Created'),
        ),
    ]
