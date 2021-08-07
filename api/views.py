from api.serializers import InstaAccountSerializer, InstaUserSerializer
from instaaccount.models import InstaAccount, InstaUser
from rest_framework import serializers, viewsets, generics
from rest_framework.permissions import IsAuthenticated

class InstaUserListView(generics.ListCreateAPIView):
    queryset = InstaUser.objects.all()
    serializer_class = InstaUserSerializer

class InstaUserSingleView(generics.RetrieveUpdateDestroyAPIView):
    queryset = InstaUser.objects.all()
    serializer_class = InstaUserSerializer

class InstaAccountListView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        return InstaAccount.objects.filter(kaminousername_id=self.request.user.id)
    serializer_class = InstaAccountSerializer

class InstaAccountSingleView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        return InstaAccount.objects.filter(kaminousername_id=self.request.user.id)
    serializer_class = InstaAccountSerializer