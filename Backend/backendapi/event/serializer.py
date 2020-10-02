from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator

from .models import AddEvent, BookEvent

# Add event serializer
class AddEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddEvent
        fields = '__all__'

# Event Booking Serializer

class BookEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookEvent
        fields = '__all__'
        validators = [
            UniqueTogetherValidator(
                queryset=BookEvent.objects.all(),
                fields=['user', 'time', 'event'],
                message="Already booked an Event at the same time! Kindly select a different time."
            )

        ]

    def validate(self, attr):

        time = attr.get("time", None)
        event = attr.get("event", None)

        if event:

            if event.room_capacity <= BookEvent.objects.filter(event=event, time=time).count():
                raise serializers.ValidationError(
                    {"Event is Fully Booked"})
        return attr
