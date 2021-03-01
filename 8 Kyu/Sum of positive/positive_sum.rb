# Kata:
# https://www.codewars.com/kata/5715eaedb436cf5606000381

# Example:

# Solution:
def positive_sum(arr)
  arr.select! { |num| num > 0 }
  arr.empty? ? 0 : arr.reduce(0, :+)
end