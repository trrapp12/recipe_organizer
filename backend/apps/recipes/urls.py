from django.conf.urls import url
from views import RecipeList

urlpatterns = [
    url('^recipes/$', RecipeList.as_view(), name='recipe-list'),
]