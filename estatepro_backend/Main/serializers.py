from rest_framework import serializers
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.core.mail import send_mail
from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken
from .models import AppUser, AgentApplication, ContactRequest

class LoginSerializer(serializers.ModelSerializer):
    #serializer for logging in
    password = serializers.CharField(write_only=True)
    class Meta:
        model = AppUser
        fields = ['email', 'password']


class RegisterSerializer(serializers.ModelSerializer):
    #serializer for creating users
    password = serializers.CharField(write_only=True)

    class Meta:
        model = AppUser
        fields = ['full_name', 'email', 'password']

    def create(self, validated_data):
        user = AppUser.objects.create_user(
            username=validated_data['full_name'],
            full_name=validated_data['full_name'],
            email=validated_data['email'],
            password=validated_data['password'],
      # Inactive until verified
            is_active=True
        )
        self.send_verification_email(user)
        return user

    def send_verification_email(self, user):
        token = RefreshToken.for_user(user).access_token
        current_site = get_current_site(self.context['request']).domain
        relative_link = reverse('email-verify')
        absurl = f'http://{current_site}{relative_link}?token={str(token)}'
        subject = 'Verify your email'
        message = f'Hi {user.first_name} Click the link to verify your account: {absurl}'
        #send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [user.email])
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactRequest
        fields = ['name', 'email', 'phone_number', 'message'] 

class CreateAgentApplySerializer(serializers.ModelSerializer):
    id_file = serializers.FileField(required=True)
    license_file = serializers.FileField(required=True)

    class Meta:
        model = AgentApplication
        fields = ['full_name', 'phone_number', "nin_number", "years_of_experience", 'id_file', "license_file"]
