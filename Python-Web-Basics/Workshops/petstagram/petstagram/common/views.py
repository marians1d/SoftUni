from django.shortcuts import render, redirect, resolve_url

from pyperclip import copy

from petstagram.photos.models import Photo
from .models import Like
from .forms import CommentForm, SearchForm


def home_page(request):
    all_photos = Photo.objects.all()
    comment_form = CommentForm()
    search_form = SearchForm(request.POST or None)

    if search_form.is_valid():
        all_photos = all_photos.filter(tagged_pets__name__icontains=search_form.cleaned_data['pet_name'])

    context = {
        'all_photos': all_photos,
        'comment_form': comment_form,
        'search_form': search_form,
    }

    return render(request, template_name='common/home-page.html', context=context)


def like_photo(request, photo_id):
    photo = Photo.objects.get(pk=photo_id)
    like_object = Like.objects.filter(to_photo_id=photo_id).first()

    if like_object:
        like_object.delete()
    else:
        like_object = Like(to_photo=photo)
        like_object.save()

    return redirect(request.META['HTTP_REFERER'] + f"#{photo_id}")


def share_photo(request, photo_id):
    copy(request.META['HTTP_REFERER'] + resolve_url('photo details', photo_id))

    return redirect(request.META['HTTP_REFERER'] + f"#{photo_id}")


def add_comment(request, photo_id):
    if request.method == 'POST':
        photo = Photo.objects.get(pk=photo_id)
        form = CommentForm(request.POST)

        if form.is_valid():
            comment = form.save(commit=False)
            comment.to_photo = photo
            comment.save()

        return redirect(request.META['HTTP_REFERER'] + f"#{photo_id}")


