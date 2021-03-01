# Kata:
# https://www.codewars.com/kata/515ceaebcc1dde8870000001

# Example:

# Solution:
def solution(items, index, default_value)
    if index.abs <= items.length
      items[index]
    else 
      default_value
    end
end