from django.urls import path, include
from . import views

urlpatterns = [
    path('add/', views.add_pet, name='add pet'),
    path('<str:username>/pet/<slug:pet_slug>/', include([
        path('', views.pet_details, name='pet details'),
        path('edit/', views.edit_pet, name='edit pet'),
        path('delete/', views.delete_pet, name='delete pet'),
    ]))
]