from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse
from datetime import datetime

from .models import IndexCard


class IndexView(TemplateView):
    template_name = "index/index.html"

    def post(self, request, *args, **kwargs):
        translate_text = request.POST.get('translate_text')
        
        if len(translate_text.split("\n")) >= 2:
            last_text = translate_text.split("\n")[-2]
        else:
            last_text = translate_text.split("\n")[0]
        upper_text = translate_text.upper()
        lower_text = translate_text.lower()
        random_text = "X1C"

        if translate_text.endswith("\n"):
            now = datetime.now()
            with open('history.txt', 'a') as f:
                upper_write = last_text.upper()
                lower_write = last_text.lower()
                random_write = "X1Gen7"
                f.write(last_text + "," + upper_write + "," + lower_write + "," + random_write + "," +
                        now.strftime("%m/%d/%Y-%H:%M:%S\n"))

        return JsonResponse({'upperText': upper_text, 'lowerText': lower_text, 'randomText': random_text})

    def get_context_data(self, **kwargs):
        index_card = IndexCard.objects.get(id=1)
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
