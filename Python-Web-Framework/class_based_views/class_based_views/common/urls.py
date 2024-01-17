from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_posts, name='list_posts'),
    path('cbv/', views.PostsListView.as_view(), name='cbv_list_posts'),
    path('cbv/template/', views.PostsTemplateView.as_view(), name='temp_list_posts'),
    path('cbv/redirect/', views.PostRedirectView.as_view(), name='redirect_list_posts'),
    path('cbv/view/', views.PostListView.as_view(), name='view_posts'),
    path('cbv/view/<int:pk>', views.PostDetailsView.as_view(), name='post_details'),
    path('cbv/view/create/', views.PostCreateView.as_view(), name='post_create'),
    path('cbv/view/update/<int:pk>', views.PostUpdateView.as_view(), name='post_update'),
    path('cbv/view/delete/<int:pk>', views.PostDeleteView.as_view(), name='post_delete')
]
