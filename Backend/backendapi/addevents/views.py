from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.views import APIView
from .models import AddEvent

# Create your views here.
# def index(request):
#     all_events = AddEvent.objects.all()
#     return render(request,"index.html", {'Events': all_events})

# Events listing view
class AddEventView(generics.ListAPIView):
    queryset = AddEvent.objects.all()
    serializer_class = AddEventSerializer