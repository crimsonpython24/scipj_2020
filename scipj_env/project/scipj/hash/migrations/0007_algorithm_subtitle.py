# Generated by Django 2.2.11 on 2020-04-05 03:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hash', '0006_auto_20200405_1047'),
    ]

    operations = [
        migrations.AddField(
            model_name='algorithm',
            name='subtitle',
            field=models.CharField(default='', max_length=200, verbose_name='Subtitle'),
            preserve_default=False,
        ),
    ]
