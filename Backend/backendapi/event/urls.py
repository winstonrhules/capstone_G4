from django.test import TestCase

# Create your tests here.
from django.urls import path
from .views import AddEventView, EventAdding, BookEventView, BookedEventsView, EventsBookedByUser, EventCountView, EventAttendees
from . import views
from knox import views as knox_views

app_name = 'event'

urlpatterns = [
    # Event listing Url
    path('listevent/', AddEventView.as_view(), name='list_events'),
    # Event adding Url
    path('addevent/', EventAdding.as_view(), name='adding_events'),
    # Event booking Url
    path('bookevent/', BookEventView.as_view(), name='book_events'),
    # all Booked Events listing Url
    path('bookedevents/', BookedEventsView.as_view(), name='booked_events'),
    # Events booked by a user listing Url
    path('listbookings/<pk>/', EventsBookedByUser.as_view()),
    # Event Attendees listing Url
    path('eventattendeelist/', EventAttendees.as_view()),
    # Events count view Url
    path('eventcountview/', EventCountView.as_view()),

]
