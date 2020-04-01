from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse


class IndexView(TemplateView):
    template_name = "sample/layout.html"

    def post(self, request, *args, **kwargs):
        translateText = request.POST.get('translateText')
        upperText = translateText.upper()
        lowerText = translateText.lower()
        randomText = "X1C"
        return JsonResponse({'upperText': upperText, 'lowerText': lowerText, 'randomText': randomText})

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
