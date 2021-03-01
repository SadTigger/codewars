# Kata:
# https://www.codewars.com/kata/55f2b110f61eb01779000053

# Example:

# Solution:
def get_sum(a,b)
  return a if a.eql?(b)
  sum = 0
  (a..b).each { |num| sum += num } if a < b
  (b..a).each { |num| sum += num } if a > b
  sum
end