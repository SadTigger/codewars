# Kata:
# https://www.codewars.com/kata/5b5604e26dc79e6832000101

# Example:

# Solution:
def invert_hash(hash)
  invert_hash = {}
  hash.each_pair { |k,v| invert_hash[v] = k }
  invert_hash
end