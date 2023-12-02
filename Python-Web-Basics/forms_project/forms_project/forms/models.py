from django.db import models

from .validators import validate_name, validate_age


class User(models.Model):
    first_name = models.CharField(max_length=15, validators=(validate_name,))
    last_name = models.CharField(max_length=15)
    age = models.IntegerField(
        validators=(validate_age,),
        error_messages={
            'over_18': 'User must not be over 18!'
        }
    )
    image = models.ImageField(upload_to='images', blank=True, null=True)
    email = models.EmailField()
