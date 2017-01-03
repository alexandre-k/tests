from phonebook import Phonebook
import pytest


@pytest.fixture
def phonebook(tmpdir):
    """Just some the definition of a phonebook to use later on
    """
    phonebook = Phonebook(tmpdir)
    phonebook.add('Bob', '123')
    phonebook.add('Alice', '12345')
    yield phonebook
    #  phonebook.clear()


def test_add_and_lookup_entry(phonebook):
    assert '123' == phonebook.lookup('Bob'), 'Bob not found'


def test_phonebook_gives_access_to_names_and_numbers(phonebook):
    assert 'Alice' in phonebook.names()
    assert '12345' in phonebook.numbers()


def test_missing_entry_raises_KeyError(phonebook):
    with pytest.raises(KeyError):
        phonebook.lookup('Alic')
