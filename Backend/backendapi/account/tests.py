# Create your tests here.
from django.test import TestCase
from django.urls import reverse
from account.models import User


class BaseTest(TestCase):
    def setUp(self):
        self.register_url = reverse('register')
        self.login_url = reverse('login')
        self.user = {
            'first_name': 'firstname',
            'last_name': 'lastname',
            'email': 'testemail@gmail.com',
            'username': 'username',
            'password': 'password',
        }
        self.user_short_password = {
            'first_name': 'firstname',
            'last_name': 'lastname',
            'email': 'testemail@gmail.com',
            'username': 'username',
            'password': 'pas',
        }
        

        self.user_invalid_email = {

            'first_name': 'firstname',
            'last_name': 'lastname',
            'email': 'testemail.com',
            'username': 'username',
            'password': 'pas',
        }
        return user().setUp()

class RegisterTest(BaseTest):
    def test_can_register_user(self):
        response = self.client.post(
            self.register_url, self.user, format='text')
        self.assertEqual(response.status_code, 400)

    def test_cant_register_user_withshortpassword(self):
        response = self.client.post(
            self.register_url, self.user_short_password, format='text')
        self.assertEqual(response.status_code, 400)
    def test_cant_register_user_with_invalid_email(self):
        response = self.client.post(
            self.register_url, self.user_invalid_email, format='text')
        self.assertEqual(response.status_code, 400)


class LoginTest(BaseTest):
    def test_login_success(self):
        self.client.post(self.register_url, self.user, format='text')
        user = Account.objects.filter(email=self.user['email']).first()
        response = self.client.post(
            self.login_url, self.user, format='text')
        self.assertEqual(response.status_code, 401)

    def test_cantlogin_with_unverified_email(self):
        self.client.post(self.register_url, self.user, format='text')
        response = self.client.post(
            self.login_url, self.user, format='text')
        self.assertEqual(response.status_code, 401)
