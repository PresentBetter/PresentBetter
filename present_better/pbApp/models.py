from django.db import models

# Create your database models here.

class User(models.Model):
  username = models.CharField('username', max_length = 225, unique= True)
  password = models.CharField('password', max_length = 16)

class Recordings(models.Model):
  name = models.CharField('RecordingNo.', max_length = 225, unique = True)
  created_at = models.DateTimeField(auto_now_add = True)
  user = models.ForeignKey(User, on_delete= models.CASCADE)
