from django import forms
from django.core.validators import MinLengthValidator, EmailValidator

from .models import User as UserModel
from .validators import validate_test


class User(forms.Form):
    CHOICES = (
        ('', 'Choose...'),
        ('1', 'Male'),
        ('2', 'Female'),
        ('3', 'Other'),
    )

    RADIO_CHOICES = (
        ('1', 'Junior'),
        ('2', 'Middle'),
        ('3', 'Senior'),
    )

    name = forms.CharField(
        initial='Ivan',
        label='User Name',
        max_length=20,
        validators=(MinLengthValidator(4), validate_test),
        error_messages={
            'required': 'Please enter you name',
            'min_length': 'Custom message',
            'test': 'Test message'
        }
    )
    email = forms.EmailField(
        label='Email Address',
        help_text='Enter a valid email address',
        validators=(EmailValidator,)
    )
    text = forms.CharField(widget=forms.Textarea(attrs={'rows': 5, 'cols': 20}))

    choice_field = forms.ChoiceField(label='Gender', choices=CHOICES)
    # choice_field = forms.CharField(widget=forms.Select(choices=CHOICES))

    job_title = forms.ChoiceField(choices=RADIO_CHOICES, widget=forms.RadioSelect)

    agreed_field = forms.BooleanField(label='Agree to terms', widget=forms.CheckboxInput(attrs={'class': 'form-check'}))


class ModelUser(forms.ModelForm):
    class Meta:
        model = UserModel
        # fields = '__all__'
        exclude = ['last_name']
        # Same as:
        # fields = ['first_name', 'age', 'email']

        # labels = {
        #     'first_name': 'First Name',
        #     'age': 'Age',
        #     'email': 'Email Address',
        # }

        # widgets = {
        #     'first_name': forms.TextInput(attrs={'class': 'form-control'}),
        #     ...
        # }

        help_texts = {
            'first_name': 'Enter your first name',
            'age': 'Enter your age',
            'email': 'Enter your email address',
        }

        error_messages = {
            'first_name': {
                'name': 'Name must contain only letters.'
            },
            # Message here is displayed over the message in models
            # 'age': {
            #     'over_18': 'New User must not be over 18!'
            # }
        }

    def clean(self):
        super(ModelUser, self).clean()

        first_name = self.cleaned_data.get('first_name')

        if len(first_name) < 2:
            self._errors['first_name'] = self.error_class([
                'Minimum 2 characters required!'
            ])

        return self.cleaned_data
