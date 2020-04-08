from django.http import JsonResponse
from django.views.generic.detail import DetailView
from .models import Algorithm


class HashDetailView(DetailView):
    model = Algorithm
    template_name = "hash/layout.html"

    @staticmethod
    def post(request, *args, **kwargs):
        translate_text = request.POST.get('translateText')
        after_text = translate_text.upper()
        return JsonResponse({'afterText': after_text})

    def get_context_data(self, **kwargs):
        slug_data = []

        slug = self.kwargs['slug']
        context = super(HashDetailView, self).get_context_data(**kwargs)

        for algorithm in Algorithm.objects.all():
            slug_data.append(algorithm.slug)
        context['all'] = slug_data

        return context
