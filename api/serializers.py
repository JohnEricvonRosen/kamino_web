from django.db.models import fields
from rest_framework import serializers
from instaaccount.models import InstaAccount, InstaUser

class InstaUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstaUser
        fields = (
            'id', 
            'username',
            'interacted',
            'dateCollected',
            'dateInteracted',
        )

class InstaAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstaAccount
        fields = (
            'id',
            'username', 
            'password', 
            'followers', 
            'dateCreated', 
            'hashtags', 
            'instaUsers'
        )