from django.contrib import admin
from .models import AgentApplication, AppUser
# Register your models here.
admin.site.register(AgentApplication)
admin.site.register(AppUser)