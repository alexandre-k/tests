import pytest
from .. import forms
pytestmark = pytest.mark.django_db


class TestPostForm:
    def test_form(self):
        form = forms.PostForm(data={})
        assert form.is_valid() is False, 'Should be invalid if no data given'

        form = forms.PostForm(data={'body': 'Hello'})
        assert form.is_valid() is False, 'Should be invalid if too short'
        assert 'body' in form.errors, 'Should have body field error'

        form = forms.PostForm(data={'body': 'Hello world!'})
        assert form.is_valid() is True, 'Should be valid if long enough'
