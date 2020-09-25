from register.models import Event
from rest_framework import viewsets, permissions
from .serializer import EventSerializer

# Signup Viewset
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = EventSerializer