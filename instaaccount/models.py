from django.db import models
from django.db.models.fields import BooleanField, CharField, DateField, IntegerField
from django.db.models.fields.json import JSONField
from django.db.models.fields.related import ForeignKey, ManyToManyField
from django.contrib.auth.models import User

class InstaAccount(models.Model):
    kaminousername = models.ForeignKey(User, on_delete=models.CASCADE)

    username = CharField(max_length=30, unique=True)
    password = CharField(max_length=50)
    dateCreated = DateField(auto_now_add=True)
    hashtags = JSONField(default=list, null=True)

    def __str__(self):
        return self.username

class InstaUser(models.Model):
    instaaccount = ForeignKey(InstaAccount, on_delete=models.CASCADE)

    username = CharField(max_length=30, unique=True)
    interacted = BooleanField(default=False)
    dateCollected = DateField(auto_now_add=True)

    def __str__(self):
        return self.username

class InstaStatistics(models.Model):
    instaaccount = ForeignKey(InstaAccount, on_delete=models.CASCADE)

    followers = IntegerField()
    date = DateField(auto_now_add=True)

    def __str__(self):
        return self.instaaccount.username + " " + str(self.date)