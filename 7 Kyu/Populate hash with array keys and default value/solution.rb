# Kata:
# https://www.codewars.com/kata/51c38e14ea1c97ffaf000003

# Example:

# Solution:
def solution(keys, default_value)
  keys.map { |key| [key, default_value] }.to_h
end