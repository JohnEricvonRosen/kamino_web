from django.urls import path
from .views import BlacklistTokenView, KaminoUserRegister

app_name = 'kaminouser'

urlpatterns = [
    path('register/', KaminoUserRegister.as_view(), name='create_user'),
    path('logout/blacklist/', BlacklistTokenView.as_view(), name='blacklist'),
]