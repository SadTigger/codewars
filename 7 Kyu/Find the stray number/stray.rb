# Kata:
# https://www.codewars.com/kata/57f609022f4d534f05000024

# Example:

# Solution:
def stray (numbers)
  numbers.uniq.map{|t| [t,numbers.count(t)]}.min_by{|k, v| v}[0]
end