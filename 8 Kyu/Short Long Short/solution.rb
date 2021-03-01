# Kata:
# https://www.codewars.com/kata/50654ddff44f800200000007

# Example:

# Solution:
def solution(a, b)
  a.length > b.length ? "#{b}" + "#{a}" + "#{b}" : "#{a}" + "#{b}" + "#{a}"
end