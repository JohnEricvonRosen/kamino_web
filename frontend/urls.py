from django.urls import path
from .views import index

urls = ['', 
    'about/',  
    'login/', 
    'logout/',
    'zach/',
    'accounts/',
    'settings/',
    'signup/',
]

urlpatterns = [path(x, index) for x in urls]