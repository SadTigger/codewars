# Kata:
# https://www.codewars.com/kata/56f695399400f5d9ef000af5

# Example:

# Solution:
def correct_tail(body, tail)
  sub = body[body.length-(tail.length)]
  sub == tail ? true : false
end