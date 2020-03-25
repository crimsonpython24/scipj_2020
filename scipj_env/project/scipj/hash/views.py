from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse


class IndexView(TemplateView):
    template_name = "sample/layout.html"

    def post(self, request, *args, **kwargs):
        translateText = request.POST.get('translateText', '')
        newText = translateText.upper()
        return JsonResponse({'translateText': newText})

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
