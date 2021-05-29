from django.test import TestCase
from django.urls import reverse

from backend.models import Inquiry


class PasswordChangeTests(TestCase):

    def test_create_inquiry(self):
        rest_password_url = reverse('create_inquiry')
        data = {
            'email': 'test@email.com',
            'name': 'Test User',
            'message': 'This is the inquiry',
        }
        response = self.client.post(rest_password_url, data=data)

        self.assertEqual(response.status_code, 201)
        self.assertEqual(Inquiry.objects.count(), 1)
        inquiry = Inquiry.objects.first()
        self.assertEqual(inquiry.email, 'test@email.com')
        self.assertEqual(inquiry.name, 'Test User')
        self.assertEqual(inquiry.message, 'This is the inquiry')
