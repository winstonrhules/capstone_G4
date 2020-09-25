from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

User._meta.get_field('email')._unique = True

class UserSerializer(serializers.ModelSerializer):
    # password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['id','first_name','last_name','username','email','password']
        
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

        # password = self.validated_data['password']
        # password2 = self.validated_data['password2']
        # if password != password2:
        #     raise serializers.ValidationError({'password': 'Passwords dont match.'})
        # user.set_password(password)

        Token.objects.create(user = user)
        return user