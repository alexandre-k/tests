#  import unittest
import pytest

from tennis import tennis_score

test_case_data = \
    {'even_scores': [('Love-All', 0, 0),
                     ('Fifteen-All', 1, 1),
                     ('Thirty-All', 2, 2)
                     ],
     'early_games_with_uneven_scores': [('Love-Fifteen', 0, 1),
                                        ('Fifteen-All', 1, 1),
                                        ('Thirty-All', 2, 2)
                                        ]
     }


examples =  (('expected_score', 'player1_points', 'player2_points'),
            [('Love-All',      0,                  0),
             ('Fifteen-All',   1,                  1),
             ('Thirty-All',    2,                  2)
            ])
@pytest.mark.parametrize(*examples)
def test_early_game_scores_equal(expected_score, player1_points, player2_points):
    assert expected_score == tennis_score(player1_points, player2_points)
    assert 'Love-All' == tennis_score(0, 0)
    assert 'Fifteen-All' == tennis_score(1, 1)
    assert 'Thirty-All' == tennis_score(2, 2)

#  def tennis_test_template(*args):
    #  def foo(self):
        #  self.assert_tennis_score(*args)
    #  return foo
#
#  class TennisTest(unittest.TestCase):
#
    #  def assert_tennis_score(self, expected_score, player1_points, player2_points):
        #  self.assertEqual(expected_score, tennis_score(player1_points, player2_points))
#
#  for behaviour, test_cases in test_case_data.items():
    #  for tennis_test_case_data in test_cases:
        #  expected_output, player1_score, player2_score = tennis_test_case_data
        #  test_name = 'test_{0}_{1}_{2}'.format(behaviour, player1_score, player2_score)
        #  tennis_test_case = tennis_test_template(*tennis_test_case_data)
        #  setattr(TennisTest, test_name, tennis_test_case)
