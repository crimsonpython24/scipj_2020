from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse
from datetime import datetime


class IndexView(TemplateView):
    template_name = "sample/layout.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

