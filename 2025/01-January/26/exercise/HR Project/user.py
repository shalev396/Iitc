import random
import re


class User:
    def __init__(self, **kwargs):
        self.id = random.randrange(0, 100000)
        self.name = self._validate_name(kwargs.get('name'))
        self.email = self._validate_email(kwargs.get('email'))
        self.extra_details = kwargs.get('extra_details', {})

    @staticmethod
    def _validate_name(name):
        if not name or not isinstance(name, str) or len(name.strip()) == 0:
            raise ValueError("Name cannot be empty")
        return name.strip()

    @staticmethod
    def _validate_email(email):
        if not email or not isinstance(email, str):
            raise ValueError("Email cannot be empty")
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            raise ValueError("Invalid email format")
        return email.lower()

    def __str__(self):
        extra_details_str = ", ".join(f"{k}: {v}" for k, v in self.extra_details.items())
        return f"ID: {self.id}, Name: {self.name}, Email: {self.email}, Details: {extra_details_str}"

    def update(self, **kwargs):
        if 'name' in kwargs:
            self.name = self._validate_name(kwargs['name'])
        if 'email' in kwargs:
            self.email = self._validate_email(kwargs['email'])
        if 'extra_details' in kwargs:
            self.extra_details.update(kwargs['extra_details'])

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "extra_details": self.extra_details
        }

    def get_id(self):
        return self.id
