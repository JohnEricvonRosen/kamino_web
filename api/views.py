from api.serializers import AccountSerializer
from api.models import Account
from rest_framework import viewsets

class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer