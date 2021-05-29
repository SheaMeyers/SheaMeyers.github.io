from django.contrib import admin
from .models import Inquiry


@admin.register(Inquiry)
class UserInquiry(admin.ModelAdmin):
    list_display = ('email', 'name', 'date_made')
    readonly_fields = ('date_made',)
