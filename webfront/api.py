from rest_framework import routers
from api.views import AccountViewSet

router = routers.DefaultRouter()
router.register(r'account', AccountViewSet)