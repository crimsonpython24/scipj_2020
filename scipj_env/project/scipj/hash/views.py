from django.http import JsonResponse
from django.views.generic.detail import DetailView
from .models import Algorithm

import hashlib
import bcrypt


class HashDetailView(DetailView):
    model = Algorithm
    template_name = "hash/layout.html"

    @staticmethod
    def post(request, *args, **kwargs):
        translate_text = request.POST.get('translateText')
        algo_type = request.POST.get('algotype')
        print(request.POST)

        md5 = hashlib.new("md5")
        md5.update(translate_text.encode('utf-8'))
        sha1 = hashlib.new("sha1")
        sha1.update(translate_text.encode('utf-8'))
        sha256 = hashlib.new("sha256")
        sha256.update(translate_text.encode('utf-8'))
        ripemd160 = hashlib.new('ripemd160')
        ripemd160.update(translate_text.encode('utf-8'))
        whirlpool = hashlib.new('whirlpool')
        whirlpool.update(translate_text.encode('utf-8'))
        blake2 = hashlib.new('blake2b')
        blake2.update(translate_text.encode('utf-8'))
        sha3 = hashlib.new('sha3_512')
        sha3.update(translate_text.encode('utf-8'))
        md5_text = md5.hexdigest()
        sha1_text = sha1.hexdigest()
        sha2_text = sha256.hexdigest()
        ripemd160_text = ripemd160.hexdigest()
        whirlpool_text = whirlpool.hexdigest()
        bcrypt_text = "Feature unavailable"
        blake2_text = blake2.hexdigest()
        sha3_text = sha3.hexdigest()

        texts = {'messagedigest5': md5_text, 'securehash1': sha1_text, 'securehash2': sha2_text,
                 'ripemessagedigest': ripemd160_text, 'BcryptText': bcrypt_text, 'blake2': blake2_text,
                 'WhirlpoolText': whirlpool_text, 'SHA3Text': sha3_text}

        after_text = texts.get(algo_type)
        return JsonResponse({'afterText': after_text})

    def get_context_data(self, **kwargs):
        slug = self.kwargs['slug']
        context = super(HashDetailView, self).get_context_data(**kwargs)

        slug_data = []
        name_data = []
        for algorithm in Algorithm.objects.all():
            slug_data.append(algorithm.slug)
            name_data.append(algorithm.name)
        context['all'] = slug_data
        context['all_name'] = name_data
        return context
