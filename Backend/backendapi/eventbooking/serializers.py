from rest_framework import serializers
from .models import RegisterEvent
from rest_framework.authtoken.models import Token
from rest_framework.validators import UniqueTogetherValidator

# event booking serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterEvent
        exclude = []
        validators = [
            UniqueTogetherValidator(
                queryset=RegisterEvent.objects.all(),
                fields = ['name','time','number','event'],
                message="Event booked at the same time, please select a different time."

            )
        ]

