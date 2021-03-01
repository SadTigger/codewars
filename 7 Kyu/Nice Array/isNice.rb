# Kata:
# https://www.codewars.com/kata/59b844528bcb7735560000a0

# Example:

# Solution:
def isNice(arr)
  return false if arr.empty?
  
  !arr.collect { |v| arr.include?(v-1) || arr.include?(v+1) }.include?(false)
end