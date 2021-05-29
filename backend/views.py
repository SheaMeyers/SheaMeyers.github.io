from django.conf import settings
from django.core.mail import EmailMultiAlternatives
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Inquiry
from .serializers import InquirySerializer


class CreateInquiry(APIView):

    def post(self, request: Request) -> Response:
        data = InquirySerializer(request.data).data

        Inquiry.objects.create(**data)

        message = f"Name: {data['name']}\n" \
                  f"Email: {data['email']}\n" \
                  f"Message: {data['message']}"

        EmailMultiAlternatives('New Nedleaf Inquiry',
                               message,
                               settings.EMAIL_HOST_USER,
                               ['shea.meyers@gmail.com']).send()

        return Response(status=201)
