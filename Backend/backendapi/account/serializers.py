from django.db import models

# Create your models here.
from rest_framework import serializers
from django.contrib.auth.models import User

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','first_name','last_name', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','first_name','last_name', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}


    def validate(self, attrs):
        email = attrs.get('email', '')
        username = attrs.get('username', '')
        password = attrs.get('password', '')

        # Validates that username field should contain alphanumeric characters
        if not username.isalnum():
            raise serializers.ValidationError(
                'The username should only contain alphanumeric characters')
        
        # Validates that password must contain at least one numeric character
        if not re.findall('\d', password):
            raise serializers.ValidationError(
                "The password must contain at least 1 digit, 0-9.")

        # Validates that password must be at least 6 characters long
        if len(password) < 6:
            raise serializers.ValidationError(
                "Password must be at least 6 characters")

        return attrs

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'],
        first_name=validated_data['first_name'],
        last_name=validated_data['last_name'],
        )

        return user