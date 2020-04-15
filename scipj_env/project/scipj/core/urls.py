from django.urls import path

from .views import IndexView, BulletinBoardView, TranslateLogView


urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('bulletin', BulletinBoardView.as_view(), name='bulletin_board'),
    path('core/log/', TranslateLogView.as_view(), name='translate_log')
]
