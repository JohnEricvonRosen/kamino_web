from django.db import models
from django.db.models.fields import BooleanField, CharField, DateField, IntegerField
from django.db.models.fields.json import JSONField
from django.db.models.fields.related import ManyToManyField
from django.contrib.auth.models import User

class InstaUser(models.Model):
    username = CharField(max_length=30, unique=True)
    interacted = BooleanField(default=False)
    dateCollected = DateField(auto_now_add=True)
    dateInteracted = DateField(null=True)

    def __str__(self):
        return self.username

class InstaAccount(models.Model):
    kaminousername = models.ForeignKey(User, on_delete=models.CASCADE, default=1)

    username = CharField(max_length=30, unique=True)
    password = CharField(max_length=50)
    followers = IntegerField()
    dateCreated = DateField(auto_now_add=True)

    hashtags = JSONField(default=list)
    instaUsers = ManyToManyField(InstaUser)

    def __str__(self):
        return self.username

