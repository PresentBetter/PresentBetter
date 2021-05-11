from django.urls import path
from .views import index

# route path, if you type in domain name with that path, send it to that file
urlpatterns = [
    path('', index)
]
