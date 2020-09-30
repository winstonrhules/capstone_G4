from rest_framework import serializers
from register.models import AddEvent

# Signup serializer
class AddEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'