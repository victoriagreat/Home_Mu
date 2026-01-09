from django.urls import path
from .views import (
    LoginView, LogoutView, RegisterView, VerifyEmail, CustomTokenObtainPairView)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework.authtoken import views
urlpatterns = [
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/register', RegisterView.as_view(), name='register'),
    path('api/verify-email/', VerifyEmail.as_view(), name='email-verify'),
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'
     ),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]