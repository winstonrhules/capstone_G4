from rest_framework import viewsets
from .models import RegisterEvent
from .serializers import UserSerializer

class UserView(viewsets.ModelViewSet):
    queryset = RegisterEvent.objects.all()
    serializer_class = UserSerializer

