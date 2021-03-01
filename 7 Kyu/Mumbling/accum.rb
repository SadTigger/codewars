# Kata:
# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

# Example:

# Solution:
def accum(s)
  s.split(//).map.each_with_index { |letter, index| letter * (index +1) }.map { |i| i.capitalize }.join('-')
end