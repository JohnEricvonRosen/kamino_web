from django.urls import path
from .views import index

urls = ['', 
    'about/',  
    'login/', 
    'logout/',
    'zach/',
    'accounts/',
    'settings/'
]

urlpatterns = [path(x, index) for x in urls]