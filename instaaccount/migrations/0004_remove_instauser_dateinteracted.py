# Generated by Django 3.2 on 2021-07-01 18:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('instaaccount', '0003_auto_20210701_1846'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='instauser',
            name='dateInteracted',
        ),
    ]
