from django.db import models

# Create your models here.
class RegisterEvent(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    number = models.IntegerField()
    event = models.CharField(max_length=50)