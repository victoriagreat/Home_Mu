from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import BaseUserManager

#create models here
class AppUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")

        email = self.normalize_email(email)

        # auto-fill username if not provided
        extra_fields.setdefault("username", email)

        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        # sanity checks
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email, password, **extra_fields)


AbstractUser._meta.get_field('email')._unique = True
AbstractUser._meta.get_field('username')._unique = False
class AppUser(AbstractUser):
    #user model
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['full_name',]
    backend = 'Main.views.UserBackend'
    full_name = models.CharField(max_length=500)
    agent_status = models.BooleanField(default=False)
    objects = AppUserManager()

class AgentApplication(models.Model):
    agent = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name="agent_application")
    full_name = models.CharField(max_length=500)
    phone_number = models.CharField(max_length=500)
    nin_number = models.CharField(max_length=11)
    years_of_experience = models.CharField(max_length=32)
    id_file = models.FileField(upload_to="id_files")
    license_file = models.FileField(upload_to="licence_files")

class ContactRequest(models.Model):
    name = models.CharField(max_length=500)
    email = models.EmailField()
    phone_number = models.CharField(max_length=400)
    message = models.TextField(blank=False)

