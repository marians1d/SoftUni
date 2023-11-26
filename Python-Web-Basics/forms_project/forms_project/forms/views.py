from django.shortcuts import render, get_object_or_404

from .forms import User as UserForm, ModelUser
from .models import User


def index(request):
    form = UserForm(request.POST or None)

    if form.is_valid():
        print(form.cleaned_data)
    else:
        print(form.errors)

    return render(request, template_name='forms/index.html', context={'form': form})


def model(request):
    if request.method == 'GET':
        form = ModelUser()
    elif request.method == 'POST':
        form = ModelUser(request.POST)

        if form.is_valid():
            form.save()

    return render(request, template_name='forms/model.html', context={'form': form})


def update_user(request, pk):
    user = get_object_or_404(User, pk=pk)

    form = ModelUser(request.POST or None, instance=user)

    if form.is_valid():
        form.save()

    return render(request, template_name='forms/update.html', context={'form': form, 'user_id': pk})
