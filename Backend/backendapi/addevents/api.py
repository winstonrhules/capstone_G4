from register.models import AddEvent
from rest_framework import viewsets, permissions
from .serializer import AddEventSerializer

# Addevent Viewset
class AddEventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    permission_classes =[
        permissions.AllowAny
    ]
    serializer_class = AddEventSerializer