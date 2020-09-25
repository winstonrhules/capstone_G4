from django.contrib import admin
from .models import RegisterEvent
 
# Register your models here.
@admin.register(RegisterEvent)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('name','time','number','event')