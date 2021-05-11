from django.urls import path
from .views import index, UserView

urlpatterns = [
  path('', index),
  # After setting up serializer, this is the path to view the api
  path('user', UserView.as_view())
]
