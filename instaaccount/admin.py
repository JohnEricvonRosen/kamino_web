from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from .models import InstaStatistic, InstaUser, InstaAccount

@admin.register(InstaAccount)
class InstaAccountAdmin(admin.ModelAdmin):
    list_display = ('kaminousername', 'username', 'dateCreated')
    list_filter = ('kaminousername', 'dateCreated')
    search_fields = ('kaminousername__username', 'username',)

    fieldsets = (
        (None, {'fields': ('kaminousername', 'username', 'password', 'hashtags')}),
    )

    # add_fieldsets = (
    #     (None, {
    #         'classes': ('wide',),
    #         'fields': ( 'kaminousername', 'username','password1', 'password2', 'hashtags')
    #     }),
    # )

@admin.register(InstaStatistic)
class InstaStatisticsAdmin(admin.ModelAdmin):
    list_display = ('instaaccount', 'followers', 'date')
    list_filter = ('instaaccount', 'date')
    search_fields = ('instaaccount__username',)

@admin.register(InstaUser)
class InstaUserAdmin(admin.ModelAdmin):
    list_display = ('instaaccount', 'username', 'interacted', 'dateCollected')
    list_filter = ('instaaccount', 'interacted', 'dateCollected')
    search_fields = ('instaaccount__username', 'username', 'interacted')
