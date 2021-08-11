from django.db import models
from django.urls import reverse
from django.conf import settings
from django.utils.text import slugify
from django.contrib.auth import hashers
from django.db.models.fields import BooleanField, CharField, DateField, IntegerField
from django.db.models.fields.json import JSONField
from django.db.models.fields.related import ForeignKey

class InstaAccount(models.Model):
    # class Owned(models.Manager):
    #     def get_queryset(self, *args, **kwargs):
    #         bob = self
    #         return super().get_queryset().filter(kaminousername=1)
            
    
    kaminousername = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    username = CharField(max_length=150, unique=True)
    
    slug = models.SlugField(max_length=150, blank=True)

    dateCreated = DateField(auto_now_add=True)
    hashtags = JSONField(default=list, null=True)

    # objects = models.Manager()
    # owned = Owned()

    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        self.slug = slugify(self.username)
        
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse(kwargs={'slug': self.slug})
    
    def lookup_field(self):
        return 'slug'



class InstaUser(models.Model):
    instaaccount = ForeignKey(InstaAccount, on_delete=models.CASCADE)

    username = CharField(max_length=30, unique=True)
    interacted = BooleanField(default=False)
    dateCollected = DateField(auto_now_add=True)

    def __str__(self):
        return self.username

class InstaStatistic(models.Model):
    instaaccount = ForeignKey(InstaAccount, on_delete=models.CASCADE)

    followers = IntegerField()
    date = DateField(auto_now_add=True)

    def __str__(self):
        return self.instaaccount.username + " " + str(self.date)