# Kata:
# https://www.codewars.com/kata/515e271a311df0350d00000f

# Example:

# Solution:
def squareSum(numbers)
  numbers.map! { |number| number ** 2 }.inject(0, :+)
end