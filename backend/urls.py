from django.conf.urls import url

from .views import CreateInquiry

urlpatterns = [
    url(r'^create-inquiry/', CreateInquiry.as_view(), name='create_inquiry'),
]
