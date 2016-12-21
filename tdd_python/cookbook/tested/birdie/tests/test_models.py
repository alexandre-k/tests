import pytest
from mixer.backend.django import mixer
pytestmark = pytest.mark.django_db # allows mixer to write to the db


class TestPost:
    def test_model(self):
        obj = mixer.blend('birdie.Post')
        assert obj.pk == 1, 'should create a Post instance'

    def test_get_excerpt(self):
        obj = mixer.blend('birdie.Post', body='Hello world')
        result = obj.get_excerpt(5)
        assert result == 'Hello', 'Should return first few characters'
