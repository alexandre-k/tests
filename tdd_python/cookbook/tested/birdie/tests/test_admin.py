import pytest
from django.contrib.admin.sites import AdminSite
from mixer.backend.django import mixer
pytestmark = pytest.mark.django_db

from .. import admin
from .. import models


class TestPostAdmin:
    def test_excerpt(self):
        obj = mixer.blend('birdie.Post')
        site = AdminSite()
        post_admin = admin.PostAdmin(models.Post, site)

        obj = mixer.blend('birdie.Post', body='Hello World')
        result = post_admin.excerpt(obj)
        assert result == 'Hello', 'should return first few characters'
