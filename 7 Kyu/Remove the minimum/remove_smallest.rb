# Kata:
# https://www.codewars.com/kata/563cf89eb4747c5fb100001b

# Example:

# Solution:
def remove_smallest(numbers)
  return [] if numbers.empty?
  min_arr = []
  min_arr = numbers.dup
  min_arr.slice!(min_arr.index(min_arr.min))
  min_arr
end