from django.db import models
from account.models import User

# Create your models here.

# Add events model
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

# Event booking model
class BookEvent(models.Model):
    event = models.ForeignKey(AddEvent, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    eventTime = (
        ('Morning','Morning'),
        ('Midmorning','Midmorning'),
        ('Afternoon','Afternoon'),
    )
    time = models.CharField(max_length=50, blank=False, choices= eventTime, default='')

    def __str__(self):
        return str(self.user) + " For " + str(self.event)

    class Meta:
        unique_together = ('event', 'time', 'user')
