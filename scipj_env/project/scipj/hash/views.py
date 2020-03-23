from django.views.generic.base import TemplateView
from django.utils import timezone


class IndexView(TemplateView):
    template_name = "sample/layout.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context


class StepperView(TemplateView):
    template_name = "sample/stepper.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
