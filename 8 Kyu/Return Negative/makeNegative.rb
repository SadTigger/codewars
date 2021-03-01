# Kata:
# https://www.codewars.com/kata/55685cd7ad70877c23000102

# Example:

# Solution:
def makeNegative(num)
  return 0 if num == 0
  num > 0 ? 0 - num : num
end