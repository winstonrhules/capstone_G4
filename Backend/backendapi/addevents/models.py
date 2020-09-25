from django.db import models

# Create your models here.
class AddEvent(models.Model):
    topic = models.CharField(max_length=100, unique=True)
    location = models.CharField(max_length=100)
    speaker = models.CharField(max_length=100)
    tagline = models.CharField(max_length=100)
    room_capacity = models.PositiveIntegerField()    
    price = models.IntegerField()
    # date = models.DateField()

    eventTime = (
        ('Morning','Morning'),
        ('Midmorning','Midmorning'),
        ('Afternoon','Afternoon'),
    )
    time = models.CharField(max_length=50, blank=False, choices= eventTime)

    def __str__(self):
        return self.topic
