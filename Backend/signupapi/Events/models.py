from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=100)
    speaker = models.CharField(max_length=100)
    tagline = models.CharField(max_length=100)
    price = models.IntegerField()
    date = models.DateTimeField()


    def __str__(self):
        return self.title
