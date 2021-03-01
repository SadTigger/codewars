# Kata:
# https://www.codewars.com/kata/56484848ba95170a8000004d

# Example:

# Solution:
def gps(s, x)
  return 0 if x.size <= 1
  x.each_cons(2).to_a.map { |a| (3600 * (a[1]-a[0]) ) / s }.max.round
end
