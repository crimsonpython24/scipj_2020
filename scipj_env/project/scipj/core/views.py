from django.views.generic.base import TemplateView
from django.utils import timezone


class IndexView(TemplateView):
    template_name = "index/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
