# Takes python code and convert into json key value objects
from rest_framework import serializers
from .models import User, Recordings

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('username', 'password')

class Recordings(serializers.ModelSerializer):
  class Meta:
    model = Recordings
    fields = ('name' , 'created_at', 'user')
