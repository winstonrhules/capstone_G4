from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import AddEvent

# Create your views here.
def index(request):
    all_events = AddEvent.objects.all()
    return render(request,"index.html", {'Events': all_events})