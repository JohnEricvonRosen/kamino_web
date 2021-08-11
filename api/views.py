from rest_framework.response import Response
from rest_framework import status
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
    serializer_class = InstaAccountSerializer
    def get_queryset(self):
        return InstaAccount.objects.filter(kaminousername_id=self.request.user.id)

    def post(self, request):
        data = request.data

        if data['username'] in InstaAccount.objects.values_list('username', flat=True):
            return Response('Username already in use.', status=status.HTTP_400_BAD_REQUEST)

        data['kaminousername'] = self.request.user.id
        serializer = InstaAccountSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class InstaAccountSingleView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = InstaAccountSerializer
    lookup_field = 'slug'
    def get_object(self):
        slug = self.kwargs['slug']
        if slug in InstaAccount.objects.values_list('username', flat=True):
            obj = InstaAccount.objects.get(username=slug)
            if self.request.user.id == getattr(obj, 'kaminousername').id:
                return obj
                # data={  'id': obj.id,
                #         'kaminousername': obj.kaminousername_id,
                #         'username': obj.username, 
                #         'dateCreated': obj.dateCreated, 
                #         'hashtags': obj.hashtags, 
                #     }
                # serializer = InstaAccountSerializer(data=data)
                # if serializer.is_valid():
                #     serializer.save()
                #     return Response(data=serializer.data, status=status.HTTP_200_OK)
            else:
                return Response('No Access.', status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response('Account doesn\'t exist', status=status.HTTP_204_NO_CONTENT)
