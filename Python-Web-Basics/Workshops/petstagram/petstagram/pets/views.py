from django.shortcuts import render, redirect

from petstagram.pets.models import Pet
from petstagram.pets.forms import PetForm, PetDeleteForm


def add_pet(request):
    form = PetForm(request.POST or None)

    if form.is_valid():
        form.save()

        return redirect('profile details', profile_id=1)

    context = {
        'form': form,
    }

    return render(request, template_name='pets/pet-add-page.html', context=context)


def pet_details(request, username, pet_slug):
    pet = Pet.objects.get(slug=pet_slug)
    all_photos = pet.photo_set.all()

    context = {
        'pet': pet,
        'all_photos': all_photos,
    }

    return render(request, template_name='pets/pet-details-page.html', context=context)


def edit_pet(request, username, pet_slug):
    pet = Pet.objects.get(slug=pet_slug)
    form = PetForm(request.POST or None, instance=pet)

    if form.is_valid():
        form.save()

        return redirect('pet details', username=username, pet_slug=pet_slug)

    context = {
        'form': form,
        'username': username,
        'pet_slug': pet_slug,
    }

    return render(request, template_name='pets/pet-edit-page.html', context=context)


def delete_pet(request, username, pet_slug):
    pet = Pet.objects.get(slug=pet_slug)

    if request.method == 'POST':
        pet.delete()

        return redirect('profile details', profile_id=1)

    form = PetDeleteForm(instance=pet)

    context = {
        'form': form,
        'username': username,
        'pet_slug': pet_slug,
    }

    return render(request, template_name='pets/pet-delete-page.html', context=context)
