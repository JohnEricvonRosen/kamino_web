from django.urls import path
from .views import index

urls = ['', 
    'about', 
    'contact', 
    'login', 
    'logout',
    'zach'
]

urlpatterns = [path(x, index) for x in urls]