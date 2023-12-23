from django import forms

from .models import Comments


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comments
        fields = ('comment_text',)
        widgets = {
            'comment_text': forms.Textarea(
                attrs={
                    'placeholder': 'Add comment...'
                }
            ),
        }


class SearchForm(forms.Form):
    pet_name = forms.CharField(
        widget=forms.TextInput(
            attrs={
                'placeholder': 'Search by pet name...'
            }
        )
    )
