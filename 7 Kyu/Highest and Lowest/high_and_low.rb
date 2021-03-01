# Kata:
# https://www.codewars.com/kata/554b4ac871d6813a03000035

# Example:

# Solution:
def high_and_low(numbers)
  arr = numbers.split(" ").map!(&:to_i).sort! { |x,y| x <=> y }
  "#{arr.max} #{arr.min}"
end