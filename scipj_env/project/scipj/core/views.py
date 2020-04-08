from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse
from datetime import datetime

from .models import IndexCard
from hash.models import Algorithm

import hashlib
import bcrypt


class IndexView(TemplateView):
    template_name = "index/index.html"

    @staticmethod
    def post(request, *args, **kwargs):
        translate_text = request.POST.get('translateText')

        bcryptkey = bcrypt.kdf(password=translate_text.encode('utf-8'), salt=b'salt', desired_key_bytes=32, rounds=100)

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
        print(bcryptkey)
        bcrypt_text = bcryptkey.decode()

        blake2_text = blake2.hexdigest()
        sha3_text = sha3.hexdigest()

        return JsonResponse({'MD5Text': md5_text, 'SHA1Text': sha1_text, 'SHA2Text': sha2_text,
                             'Ripemd160Text': ripemd160_text, 'BcryptText': bcrypt_text, 'Blake2Text': blake2_text,
                             'WhirlpoolText': whirlpool_text, 'SHA3Text': sha3_text})

    def get_context_data(self, **kwargs):
        index_card = IndexCard.objects.get(id=1)
        content = super().get_context_data(**kwargs)
        card_ctxt = {'now': timezone.now(), 'name': index_card.name, 'description': index_card.description,
                     'image': '/static/' + index_card.get_picture_paths()}
        context = {**content, **card_ctxt}

        slug_data = []
        for algorithm in Algorithm.objects.all():
            slug_data.append(algorithm.slug)
        context['all'] = slug_data
        return context
