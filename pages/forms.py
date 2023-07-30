from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import PasswordChangeForm

class ChangePwdForm(PasswordChangeForm):
    class Meta:
        model = User
        fields = "__all__"