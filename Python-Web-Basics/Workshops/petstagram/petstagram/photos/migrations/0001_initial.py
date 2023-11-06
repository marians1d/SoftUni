# Generated by Django 4.2.6 on 2023-11-06 20:21

import django.core.validators
from django.db import migrations, models
import petstagram.photos.validators


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pets', '0002_alter_pet_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='Photo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to='', validators=[petstagram.photos.validators.validate_file_size])),
                ('description', models.TextField(blank=True, max_length=300, null=True, validators=[django.core.validators.MinValueValidator(10)])),
                ('location', models.CharField(blank=True, max_length=30, null=True)),
                ('date_of_publication', models.DateField(auto_now=True)),
                ('tagged_pets', models.ManyToManyField(blank=True, to='pets.pet')),
            ],
        ),
    ]
