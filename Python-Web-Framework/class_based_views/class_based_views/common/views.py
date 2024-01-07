from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic as views

from class_based_views.common.models import Post


def list_posts(request):
    context = {
        'posts': Post.objects.all()
    }

    return render(request, 'posts/list.html', context)


class PostsListView(views.View):
    def get(self, *args, **kwargs):
        context = {
            'posts': Post.objects.all()
        }

        return render(self.request, 'posts/list.html', context)


class PostsTemplateView(views.TemplateView):
    template_name = 'posts/list.html'

    # extra_context = {
    #     'posts': Post.objects.all()
    # }

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['posts'] = Post.objects.all()
        return context


class PostRedirectView(views.RedirectView):
    url = reverse_lazy('cbv_list_posts')


class PostListView(views.ListView):
    template_name = 'posts/list_view.html'
    model = Post
    context_object_name = 'posts'
    paginate_by = 5

    def get_queryset(self):
        queryset = super().get_queryset()

        search = self.request.GET.get('search', '')
        queryset = queryset.filter(title__icontains=search)
        return queryset

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['search'] = self.request.GET.get('search', '')
        return context



