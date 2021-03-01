# Kata:
# https://www.codewars.com/kata/534d0a229345375d520006a0

# Example:

# Solution:
def power_of_two?(x)
  x.to_s(2).count('1') == 1
end