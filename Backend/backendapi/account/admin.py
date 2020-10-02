from django.contrib import admin

# Register your models here.

from account.models import User


class AccountAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'username',)
    search_fields = ('email', 'username', 'last_name',)

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(User, AccountAdmin)
