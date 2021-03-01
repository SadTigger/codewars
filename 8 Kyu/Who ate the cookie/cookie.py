# Kata:
# https://www.codewars.com/kata/55a996e0e8520afab9000055

# Example:

# Solution:
from six import string_types

def cookie(x):
    if isinstance(x, string_types):
        return "Who ate the last cookie? It was Zach!"
    elif type(x) == int or type(x) == float:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"