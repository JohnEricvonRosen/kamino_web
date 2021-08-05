from django.contrib import admin
from kaminouser.models import KaminoUser
from django.contrib.auth.admin import UserAdmin

@admin.register(KaminoUser)
class KaminoUserAdmin(UserAdmin):
    list_display = ('username', 'email', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active', 'date_joined')
    search_fields = ('username', 'email', 'firstname', 'lastname')
    ordering = ('-date_joined',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', 'is_active')}),
        ('Name', {'fields':('firstname', 'lastname')})
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'firstname', 'lastname', 'is_staff', 'is_active'),
        }),
    )