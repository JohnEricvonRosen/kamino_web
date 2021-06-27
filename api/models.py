from django.db import models
from django.db.models.fields import BooleanField, CharField, DateField, IntegerField
from django.db.models.fields.json import JSONField
from django.db.models.fields.related import ManyToManyField
import rest_framework
from rest_framework import fields

class InstaUser(models.Model):
    username = CharField(max_length=30)
    interacted = BooleanField(default=False)
    dateCollected = DateField(auto_now_add=True)
    dateInteracted = DateField(null=True)

class Account(models.Model):
    username = CharField(max_length=30)
    password = CharField(max_length=50)
    followers = IntegerField()
    dateCreated = DateField(auto_now_add=True)

    hashtags = JSONField(default=list)
    instaUsers = ManyToManyField(InstaUser)

