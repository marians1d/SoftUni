from django.shortcuts import render, redirect

from .models import Photo
from petstagram.common.forms import CommentForm
from .forms import PhotoForm, PhotoEditForm


def add_photo(request):
    form = PhotoForm(request.POST or None, request.FILES or None)

    if form.is_valid():
        form.save()
        return redirect('home page')

    context = {
        'form': form,
    }

    return render(request, template_name='photos/photo-add-page.html', context=context)


def photo_details(request, pk):
    photo = Photo.objects.get(pk=pk)
    likes = photo.like_set.all()
    comments = photo.comments_set.all()
    comment_form = CommentForm(request.POST or None)

    context = {
        'photo': photo,
        'likes': likes,
        'comments': comments,
        'comment_form': comment_form,
    }

    return render(request, template_name='photos/photo-details-page.html', context=context)


def edit_photo(request, pk):
    photo = Photo.objects.get(pk=pk)
    form = PhotoEditForm(request.POST or None, instance=photo)

    if form.is_valid():
        form.save()
        return redirect('photo details', pk=pk)

    context = {
        'form': form,
        'photo': photo,
    }

    return render(request, template_name='photos/photo-edit-page.html', context=context)


def delete_photo(request, pk):
    photo = Photo.objects.get(pk=pk)
    photo.delete()

    return redirect('home page')
