from django.contrib import admin
from .models import InstaStatistics, InstaUser, InstaAccount

admin.site.register(InstaUser)
admin.site.register(InstaAccount)
admin.site.register(InstaStatistics)
