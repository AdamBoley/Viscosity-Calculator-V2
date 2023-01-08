from django.shortcuts import render
from django.views import generic
from .models import Viscometer


class DeterminabilitySuspendedPage(generic.ListView):
    """
    View for rendering Determinability page
    Uses determinability.html
    Constructs the queryset from suspended flow viscometers only
    """
    template_name = 'determinability.html'
    model = Viscometer
    queryset = Viscometer.objects.filter(type=0).order_by('-size')

    def get(self, request):
        context = {
            "suspended": True
        }
        template_name = 'determinability.html'
        return render(request, template_name, context)


class DeterminabilityReversePage(generic.ListView):
    """
    View for rendering Determinability page
    Uses determinability.html
    Constructs the queryset from reverse flow viscometers only
    """
    model = Viscometer
    template_name = 'determinability.html'
    queryset = Viscometer.objects.filter(type=1).order_by('-size')

    def get(self, request):
        context = {
            "reverse": True
        }
        template_name = 'determinability.html'
        return render(request, template_name, context)


class RepeatabilityPage(generic.base.TemplateView):
    """
    View for rendering Repeatability page
    uses repeatability.html
    """
    template_name = 'repeatability.html'


class ReproducibilityPage(generic.base.TemplateView):
    """
    View for rendering Reproducibility page
    uses reproducibility.html
    """
    template_name = 'reproducibility.html'


class CalibrationPage(generic.ListView):
    """
    View for rendering Calibration page
    uses calibration.html
    """
    model = Viscometer
    template_name = 'calibration.html'
    queryset = Viscometer.objects.order_by('-size')


class RecalibrationPage(generic.ListView):
    """
    View for rendering Recalibration page
    uses recalibration.html
    """
    model = Viscometer
    template_name = 'recalibration.html'
    queryset = Viscometer.objects.order_by('-size')


class DiscussionPage(generic.base.TemplateView):
    """
    View for discussion page
    uses.discussion.html
    """
    template_name = 'discussion.html'
