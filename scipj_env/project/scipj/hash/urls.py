from django.urls import path

from .views import IndexView, StepperView


urlpatterns = [
    path('sample/', IndexView.as_view(), name='index'),
    path('sample/stepper/', StepperView.as_view(), name='stepper'),
]
