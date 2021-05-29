from django.db import models
from django.utils import timezone


class Inquiry(models.Model):
    date_made = models.DateTimeField(default=timezone.now)
    name = models.CharField(max_length=200)
    email = models.EmailField()
    message = models.TextField()
