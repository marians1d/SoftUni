from django.shortcuts import render, redirect, resolve_url

from pyperclip import copy

from petstagram.photos.models import Photo
from petstagram.common.models import Like


def home_page(request):
    all_photos = Photo.objects.all()

    context = {
        'all_photos': all_photos,
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
    print('testing')

    copy(request.META['HTTP_REFERER'] + resolve_url('photo details', photo_id))

    return redirect(request.META['HTTP_REFERER'] + f"#{photo_id}")
