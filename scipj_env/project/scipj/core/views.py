from django.views.generic.base import TemplateView
from django.utils import timezone
from django.http import JsonResponse
from django.views.generic.list import ListView

from datetime import datetime

from .models import IndexCard, BulletinBoard
from hash.models import Algorithm

import hashlib
import bcrypt


class IndexView(TemplateView):
    template_name = "index/index.html"

    @staticmethod
    def post(request, *args, **kwargs):
        translate_text = request.POST.get('translateText')
        tab_index = request.POST.get('tabIndex')

        try:
            bcryptkey = bcrypt.kdf(password=translate_text.encode('utf-8'), salt=b'salt', desired_key_bytes=32, rounds=100)
        except ValueError:
            pass

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

        name = ['MD5Text', 'SHA1Text', 'SHA2Text', 'Ripemd160Text',
                'BcryptText', 'Blake2Text', 'WhirlpoolText', 'SHA3Text']

        content = {'MD5Text': md5_text, 'SHA1Text': sha1_text, 'SHA2Text': sha2_text,
                   'Ripemd160Text': ripemd160_text, 'BcryptText': bcrypt_text, 'Blake2Text': blake2_text,
                   'WhirlpoolText': whirlpool_text, 'SHA3Text': sha3_text}

        if translate_text.endswith("\n"):
            now = datetime.now()
            with open('history.txt', 'w') as f:
                random_write = content.get(name[int(tab_index)])
                lastitem = translate_text.split("\n")[-2]
                f.write(random_write + "," + lastitem + "," + now.strftime("%m/%d/%Y-%H:%M:%S\n"))

        return JsonResponse(content)

    def get_context_data(self, **kwargs):
        index_card = IndexCard.objects.get(id=1)
        content = super().get_context_data(**kwargs)
        card_ctxt = {'now': timezone.now(), 'name': index_card.name, 'description': index_card.description,
                     'image': '/static/' + index_card.get_picture_paths()}
        context = {**content, **card_ctxt}

        slug_data = []
        name_data = []
        for algorithm in Algorithm.objects.all():
            slug_data.append(algorithm.slug)
            name_data.append(algorithm.name)
        context['all'] = slug_data
        context['all_name'] = name_data
        return context


class BulletinBoardView(ListView):
    model = BulletinBoard
    template_name = "bulletin/index.html"

    def get_context_data(self, **kwargs):
        boards = []
        context = super().get_context_data(**kwargs)
        for board in BulletinBoard.objects.all():
            newl = [board.title, board.subtitle, board.content, str(board.image), str(board.date_created)]
            boards.append(newl)
        newarr = [boards[i:i+1] for i in range(0, len(boards), 2)]
        context['boards'] = newarr;
        return context


class TranslateLogView(TemplateView):
    template_name = "base.html"

    def get(self, request, *args, **kwargs):
        objects = []
        with open('history.txt', 'r') as f:
            counter = 0
            lines = f.readlines()
            length = len(lines)
            idx = 5 if length > 5 else length
            for line in lines[length-idx:length]:
                temparray = line.split(',')
                print(temparray)
                objects.append(
                    {'id': counter,
                     'text': temparray[0],
                     'original_text': temparray[1],
                     }
                )
                counter += 1

        return JsonResponse({'objects': objects})
