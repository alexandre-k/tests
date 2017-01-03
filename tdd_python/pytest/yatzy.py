def small_straight(dice):
    """Score the given rooll in the 'Small Straight' Yatzy category.

    Args:
        dice: a sorted list of 5 integers indicating the dice rolled
    Returns:
        an integer score

    >>> small_straight([5,2,3,4,1])
    0
    >>> small_straight([1,2,3,4,4])
    0
    >>> small_straight([4,2,2,4,4])
    0

    """
    if sorted(dice) == [1, 2, 3, 4, 5]:
        return sum(dice)
    else:
        return 0
