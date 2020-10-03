from django.contrib import admin
from .models import AddEvent, BookEvent

# Register your models here.

# Admin add events

class AddEventAdmin(admin.ModelAdmin):
    list_display = ('topic', 'location', 'speaker', 'tagline', 'room_capacity', 'price', 'time')
    search_fields = ('topic', 'speaker', 'tagline')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

class BookEventAdmin(admin.ModelAdmin):
    list_display = ('event', 'time', 'user')
    search_fields = ('event', 'user')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

admin.site.register(AddEvent, AddEventAdmin)
admin.site.register(BookEvent, BookEventAdmin)
