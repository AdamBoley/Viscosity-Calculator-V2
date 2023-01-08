from django.contrib import admin
from .models import Viscometer


@admin.register(Viscometer)
class ViscometerAdmin(admin.ModelAdmin):
    """
    Registration for Viscometer model in admin panel
    """
    list_filter = (
        'size',
        'serial_number',
        'type',
    )

    list_display = (
        'size',
        'serial_number',
        'constant',
        'type',
        'calibration_date',
        'expiry_date',
    )

    search_fields = (
        'size',
        'serial_number',
        'constant',
        'type',
    )
