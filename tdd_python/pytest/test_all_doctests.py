import unittest
import doctest
import yatzy

def load_test(loader, tests, ignore):
    tests.addTests(doctest.DocTestSuite(yatzy))
    return tests
