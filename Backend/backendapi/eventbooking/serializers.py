from rest_framework import serializers
from .models import RegisterEvent
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterEvent
        fields = ['id','name','email','number','event']
