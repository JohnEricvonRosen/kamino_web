from django.db.models import fields
from rest_framework import serializers
from instaaccount.models import InstaAccount, InstaUser

class InstaAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstaAccount
        fields = (
            'id',
            'username', 
            'password', 
            'dateCreated', 
            'hashtags', 
        )
        
class InstaUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InstaUser
        fields = (
            'id', 
            'instaaccount',
            'username',
            'interacted',
            'dateCollected',
        )
