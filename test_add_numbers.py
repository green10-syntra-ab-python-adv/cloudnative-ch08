from unittest import TestCase
from simple import add_numbers


class TestAdd_numbers(TestCase):
    def test_add_numbers(self):
        self.assertEqual(2, add_numbers(1,1))
