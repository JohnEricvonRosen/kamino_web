from django.db import models
from django.db.models.fields import CharField, DateField, IntegerField
from django.db.models.fields.json import JSONField
from rest_framework.fields import ListField

class Account(models.Model):
    username = CharField(max_length=30)
    password = CharField(max_length=50)
    followers = IntegerField()
    dateCreated = DateField(auto_now_add=True)

    hashtags = ListField()
    instaUsers = ListField()

