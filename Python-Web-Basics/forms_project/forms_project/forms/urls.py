from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index, name='home_page'),
    path('model/', views.model, name='model_page'),
    path('update/<int:pk>/', views.update_user, name='update_user'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
