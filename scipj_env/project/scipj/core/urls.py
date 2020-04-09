from django.urls import path

from .views import IndexView, BulletinBoardView


urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('bulletin', BulletinBoardView.as_view(), name='bulletin_board')
]
