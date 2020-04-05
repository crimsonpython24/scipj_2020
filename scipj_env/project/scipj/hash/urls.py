from django.urls import path

from .views import HashDetailView


urlpatterns = [
    path('<slug:slug>', HashDetailView.as_view(), name='hash_detail')
]
