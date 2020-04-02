from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse
from datetime import datetime


class IndexView(TemplateView):
    template_name = "sample/layout.html"

    def post(self, request, *args, **kwargs):
        translateText = request.POST.get('translateText')
        afterText = translateText.upper()
        return JsonResponse({'afterText': afterText})

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

