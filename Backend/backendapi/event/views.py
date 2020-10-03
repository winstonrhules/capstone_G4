from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import AddEvent, BookEvent
from account.models import User
from .serializer import AddEventSerializer, BookEventSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
# def index(request):
#     all_events = AddEvent.objects.all()
#     return render(request,"index.html", {'Events': all_events})

# Events adding view
class EventAdding(generics.GenericAPIView):
    queryset = AddEvent.objects.all()
    serializer_class = AddEventSerializer

    def post(self, request):
        event = request.data
        serializer = self.serializer_class(data=event)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        event_data = serializer.data
        event = AddEvent.objects.get(topic=event_data['topic'])

        return Response(event_data, status=status.HTTP_201_CREATED)


# Events listing view
class AddEventView(generics.ListAPIView):
    queryset = AddEvent.objects.all()
    serializer_class = AddEventSerializer

# Events booking view
class BookEventView (generics.ListCreateAPIView):
    queryset = BookEvent.objects.all()
    serializer_class = BookEventSerializer

    def post(self, request):
        book = request.data
        serializer = self.serializer_class(data=book)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        book_data = serializer.data

        return Response(book_data, status=status.HTTP_201_CREATED)

#  Events booking list
class BookedEventsView(generics.ListAPIView):
    queryset = BookEvent.objects.all()
    serializer_class = BookEventSerializer

# User view of booked events
class EventsBookedByUser(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk, format=None):
        try:
            u = User.objects.get(pk=pk)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)

        qs = u.bookevent_set.all().values_list("event", flat=True)
        qs = AddEvent.objects.filter(pk__in=qs)
        events = AddEventSerializer(qs, many=True)
        return Response(events.data)

# View of all attendees of an event


class EventAttendees(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        print(pk)
        event = AddEvent.objects.get(pk=pk)
        bookingset = BookEvent.objects.filter(event=event)
        events = BookEventSerializer(bookingset, many=True)
        queryset = AddEvent.objects.all()
        return Response(events.data)


class EventCountView(generics.GenericAPIView):
    serializer_class = AddEventSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        event = AddEvent.objects.all()
        count = event.__len__()
        serializer = AddEventSerializer(event, many=True)
        return Response({"Number of Events": count})
