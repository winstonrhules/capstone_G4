from django.db import models

# Create your models here.
class RegisterEvent(models.Model):
    name = models.CharField(max_length=100)
    # email = models.EmailField()
    eventTime = (
        ('Morning','Morning'),
        ('Midmorning','Midmorning'),
        ('Afternoon','Afternoon'),
    )
    time = models.CharField(max_length=50, blank=False, choices= eventTime)
    number = models.IntegerField()
    event = models.CharField(max_length=50)
