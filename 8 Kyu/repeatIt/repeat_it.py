# Kata:
# https://www.codewars.com/kata/557af9418895e44de7000053

# Example:

# Solution:
from six import string_types

def repeat_it(string,n):
    if isinstance(string, string_types):
        return string*n
    else:
        return 'Not a string'