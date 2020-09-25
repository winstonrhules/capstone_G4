from rest_framework import serializers
from register.models import Event

# Signup serializer
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'