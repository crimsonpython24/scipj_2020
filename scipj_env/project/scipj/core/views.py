from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse
from datetime import datetime


class IndexView(TemplateView):
    template_name = "index/index.html"

    def post(self, request, *args, **kwargs):
        translateText = request.POST.get('translateText')
        
        if len(translateText.split("\n")) >= 2:
            lastText = translateText.split("\n")[-2]
        else:
            lastText = translateText.split("\n")[0]
        upperText = translateText.upper()
        lowerText = translateText.lower()
        randomText = "X1C"

        if translateText.endswith("\n"):
            now = datetime.now()
            with open('history.txt', 'a') as f:
                upperWrite = lastText.upper()
                lowerWrite = lastText.lower()
                randomWrite = "X1Gen7"
                f.write(lastText + "," + upperWrite + "," + lowerWrite + "," + randomWrite + "," + now.strftime("%m/%d/%Y-%H:%M:%S\n"))
                

        return JsonResponse({'upperText': upperText, 'lowerText': lowerText, 'randomText': randomText})

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
