# Generated by Django 2.2.11 on 2020-04-09 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BulletinBoard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title')),
                ('subtitle', models.CharField(max_length=150, verbose_name='Subtitle')),
                ('content', models.CharField(max_length=700, verbose_name='Content')),
            ],
        ),
    ]