from django.db import models

class Ingredient(models.Model):
    name = models.Charfield(max_length=50)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    directions = models.TextField()

    def __str__(self):
        return self.name