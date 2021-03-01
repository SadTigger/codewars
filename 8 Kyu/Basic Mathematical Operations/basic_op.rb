# Kata:
# https://www.codewars.com/kata/57356c55867b9b7a60000bd7

# Example:

# Solution:
def basic_op(operator, value1, value2)
  case operator 
    when "+" then value1 + value2
    when "-" then value1 - value2
    when "*" then value1 * value2
    when "/" then value1 / value2
  end
end