from django.db import models


class User(models.Model):
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    age = models.IntegerField()
    email = models.EmailField()
