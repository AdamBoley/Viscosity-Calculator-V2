from . import views
from django.urls import path


urlpatterns = [
    path(
        '',
        views.DeterminabilitySuspendedPage.as_view(),
        name='determinability_suspended'
    ),
    path(
        'determinability_reverse/',
        views.DeterminabilityReversePage.as_view(),
        name='determinability_reverse'
    ),
    path(
        'repeatability/',
        views.RepeatabilityPage.as_view(),
        name='repeatability'
    ),
    path(
        'reproducibility/',
        views.ReproducibilityPage.as_view(),
        name='reproducibility'
    ),
    path(
        'calibration/',
        views.CalibrationPage.as_view(),
        name='calibration'
    ),
    path(
        'recalibration/',
        views.RecalibrationPage.as_view(),
        name='recalibration'
    ),
    path(
        'discussion/',
        views.DiscussionPage.as_view(),
        name='discussion'
    ),
]
