from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home page'),
    path('like/<int:photo_id>', views.like_photo, name='like photo'),
    path('share/<int:photo_id>', views.share_photo, name='share photo'),
]
