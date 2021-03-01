# Kata:
# https://www.codewars.com/kata/586f6741c66d18c22800010a

# Example:

# Solution:
def sequence_sum(begin_number, end_number, step)
  return 0 if begin_number > end_number
  sum = 0
  (begin_number..end_number).step(step).collect { |num| sum += num }
  sum
end