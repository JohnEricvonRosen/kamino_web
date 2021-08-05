from django.db import models
from django.utils import timezone
# from django.utils.text import slugify
from django.utils.translation import gettext_lazy
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class KaminoUserManager(BaseUserManager):
    def create_user(self, email, username, password, firstname, lastname, **other_fields):
        if not email:
            raise ValueError(gettext_lazy('You must provide an Email.'))

        email = self.normalize_email(email)

        user = self.model(email=email, username=username, firstname=firstname, lastname=lastname, **other_fields)
        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, username, password, firstname, lastname, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError(
                'Superuser must be assigned to is_staff=True'
            )
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True'
            )
        return self.create_user(email, username, password, firstname, lastname, **other_fields)

        
class KaminoUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(gettext_lazy('email address'), unique=True)
    username = models.CharField(max_length=150, unique=True)
    
    firstname = models.CharField(max_length=150)
    lastname = models.CharField(max_length=150)

    # slug = models.SlugField(max_length=150, blank=True)
    
    date_joined = models.DateTimeField(default=timezone.now)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    objects = KaminoUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'firstname', 'lastname']

    def __str__(self):
        return self.username

    # def save(self, *args, **kwargs):
    #     self.slug = slugify(self.username)
    #     super().save(*args, **kwargs)

