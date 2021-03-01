# Kata:
# https://www.codewars.com/kata/5861d28f124b35723e00005e

# Example:

# Solution:
def zeroFuel(distance_to_pump, mpg, fuel_left):
    if mpg * fuel_left >= distance_to_pump:
        return True
    else:
        return False