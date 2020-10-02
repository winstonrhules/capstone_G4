from django.db import models

# Create your models here.
class AddEvent(models.Model):
    topic = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=100)
    speaker = models.CharField(max_length=100)
    tagline = models.CharField(max_length=100)
    room_capacity = models.IntegerField()    
    price = models.IntegerField()
    date = models.DateTimeField()


    def __str__(self):
        return self.topic
