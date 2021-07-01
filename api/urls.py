from api.views import InstaAccountListView, InstaAccountSingleView, InstaUserListView, InstaUserSingleView
from django.urls import path

urlpatterns = [
    path('',            InstaAccountListView.as_view(),     name='listaccounts'),
    path('<int:pk>/',   InstaAccountSingleView.as_view(),   name='singleaccount'),
    path('users/',      InstaUserListView.as_view(),        name='listusers'),
    path('users/<int:pk>/', InstaUserSingleView.as_view(),  name='singleuser')
]