from django.core.validators import ValidationError


def validate_test(value):
    if value == 'test':
        raise ValidationError('Name cannot be test!', code='test')


def validate_name(value):
    if any(char.isdigit() for char in value):
        raise ValidationError('Name can\'t contain numbers', code='name')


def validate_age(value):
    if value < 18:
        raise ValidationError('Must be over 18!', code='over_18')
