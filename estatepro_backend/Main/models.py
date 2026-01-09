from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

AbstractUser._meta.get_field('email')._unique = True
AbstractUser._meta.get_field('username')._unique = False
class AppUser(AbstractUser):
    #user model
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['full_name',]
    backend = 'App.views.UserBackend'
    full_name = models.CharField(max_length=500)
    agent_status = models.BooleanField(default=False)

class AgentApplication(models.Model):
    pass


