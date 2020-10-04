from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserView
from eventbooking import views

router = routers.DefaultRouter()
router.register('apis', views.UserView, 'eventbooking')
urlpatterns = [
    path('',include(router.urls)),

]