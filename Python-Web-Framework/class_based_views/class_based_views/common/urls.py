from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_posts, name='list_posts'),
    path('cbv/', views.PostsListView.as_view(), name='cbv_list_posts'),
    path('cbv/template/', views.PostsTemplateView.as_view(), name='cbv_temp_list_posts'),
    path('cbv/redirect/', views.PostRedirectView.as_view(), name='cbv_redirect_list_posts'),
    path('cbv/view/', views.PostListView.as_view(), name='cbv_view_posts')
]
