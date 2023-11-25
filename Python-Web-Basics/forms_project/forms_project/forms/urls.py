from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='home_page'),
    path('model/', views.model, name='model_page'),
    path('update/<int:pk>/', views.update_user, name='update_user'),
]
