# Kata:
# https://www.codewars.com/kata/56b0f6243196b9d42d000034

# Example:

# Solution:
def sum_factorial(lst)
  lst.map { |el| (1..el).inject(:*) || 1 }.reduce(:+)
end