from django.contrib.auth import login, logout
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status, viewsets, permissions
from django.shortcuts import render
from django.contrib.auth.backends import BaseBackend
from .serializers import (LoginSerializer, RegisterSerializer, CreateAgentApplySerializer)
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from django.shortcuts import get_object_or_404
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .models import AppUser, AgentApplication
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

class UserBackend(BaseBackend):
    #user backend for authentication

    def authenticate(request, email=None, password=None):
        try:
            user = AppUser.objects.get(email=email)
            if user.check_password(password):
                return user
        except AppUser.DoesNotExist:
            print(AppUser.objects) #for debugging
            return None
  

    def get_user(self, client_id):
        try:
            return AppUser.objects.get(pk=user_id)
        except AppUser.DoesNotExist:
            return None

class LoginView(APIView):
    #login view to be used as api end point
    @swagger_auto_schema(
        request_body=LoginSerializer,
        responses={
            200: openapi.Response(
                description="Success",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'message': openapi.Schema(type=openapi.TYPE_STRING)
                    }
                )
            )
        }
    )

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = UserBackend.authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            return Response({"message": "Logged in successfully"})
        
        return Response({"error": "Invalid credentials"})

class LogoutView(APIView):
    def post(self, request):
        logout(request)
        return Response({"message": "Logged out successfully"})

class RegisterView(APIView):

    @swagger_auto_schema(
        request_body = RegisterSerializer,
        responses={
            200: openapi.Response(
                description="Success",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        'message': openapi.Schema(type=openapi.TYPE_STRING)
                    }
                )
            )
        }
    )

    def post(self, request):
        serializer = RegisterSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User created. Please verify your email.',
                            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)

class VerifyEmail(APIView):
    def get(self, request):
        token = request.GET.get('token')
        try:
            access_token = AccessToken(token)
            user_id = access_token['user_id']
            user = AppUser.objects.get(email=user_id)
            if not user.is_active:
                user.is_active = True
                user.save()
            return render(request, "verify.html", {
        "message": "Email successfully verified! ",
        "redirect_url": "/"
    })
        except TokenError:
            return render(request, "alert_page.html", {
        "message": "expired Token",
        "redirect_url": "/home/"
    })
        
class CustomTokenObtainPairView(TokenObtainPairView):
    permission_classes = [permissions.AllowAny]
    def post(self, request, *args, **kwargs):
        user = UserBackend.authenticate(request, email=request.data['email'], password=request.data['password'])
        if user is not None:
            refresh_token = RefreshToken.for_user(user)
            access_token = refresh_token.access_token
            print(type(user))
            return Response(
                {
                    'access_token': str(access_token),
                    'refresh_token': str(refresh_token),
                    'user_id': user.id,
                }
            )
        return Response({'error': 'Invalid credentials'})

class AgentApplyView(CreateAPIView):
    queryset = AgentApplication.objects.all()
    serializer_class = CreateAgentApplySerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]
    parser_classes = [MultiPartParser, FormParser]
    

    def perform_create(self, serializer):
        agent = self.request.user
        if agent.agent_application.count() > 0:
            raise ValidationError("This agent has already made an application to be an agent")
        print(agent)
        serializer.save(agent=agent)
