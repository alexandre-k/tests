from phonebook import Phonebook
import unittest


class PhonebookTest(unittest.TestCase):

    def setUp(self):
        self.phonebook = Phonebook()

    def test_create_phonebook(self):
        pass

    def test_lookup_entry_by_name(self):
        self.phonebook.add("Bob", "12345")
        self.assertEqual("12345", self.phonebook.lookup("Bob"))

    def test_missing_entry_raises_keyError(self):
        with self.assertRaises(KeyError):
            self.phonebook.lookup("missing")

    def test_empty_phonebook_is_consistent(self):
        self.assertTrue(self.phonebook.is_consistent())

    def test_phonebook_adds_names_and_numbers(self):
        self.phonebook.add("Sue", "12345")
        self.assertIn("Sue", self.phonebook.get_names())
        self.assertIn("12345", self.phonebook.get_numbers())
