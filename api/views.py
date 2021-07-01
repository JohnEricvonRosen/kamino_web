from api.serializers import InstaAccountSerializer, InstaUserSerializer
from instaaccount.models import InstaAccount, InstaUser
from rest_framework import serializers, viewsets, generics

class InstaUserListView(generics.ListCreateAPIView):
    queryset = InstaUser.objects.all()
    serializer_class = InstaUserSerializer

class InstaUserSingleView(generics.RetrieveUpdateDestroyAPIView):
    queryset = InstaUser.objects.all()
    serializer_class = InstaUserSerializer

class InstaAccountListView(generics.ListCreateAPIView):
    queryset = InstaAccount.objects.all()
    serializer_class = InstaAccountSerializer

class InstaAccountSingleView(generics.RetrieveUpdateDestroyAPIView):
    queryset = InstaAccount.objects.all()
    serializer_class = InstaAccountSerializer