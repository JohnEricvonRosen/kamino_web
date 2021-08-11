from django.urls import path
from .views import index

urls = ['', 
    'about/',  
    'login/', 
    'logout/',
    # 'zach/',
    'accounts/',
    'accounts/<slug:slug>/',
    'settings/',
    'signup/',
    'addaccount/',
]

urlpatterns = [path(x, index) for x in urls]