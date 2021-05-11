from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import UserSerializer
from .models import User

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

#Allow us to view and also create user
class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
