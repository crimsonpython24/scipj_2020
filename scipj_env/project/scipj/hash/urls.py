from django.urls import path

from .views import IndexView


urlpatterns = [
    path('sample/', IndexView.as_view(), name='index'),
]
