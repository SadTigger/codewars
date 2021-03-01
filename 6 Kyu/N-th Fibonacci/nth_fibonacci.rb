# Kata:
# https://www.codewars.com/kata/522551eee9abb932420004a0

# Example:

# Solution:
def nth_fibonacci(n) 
  return 0 if n == 1
  return 1 if n == 2
  return nth_fibonacci(n-1) + nth_fibonacci(n-2)
end