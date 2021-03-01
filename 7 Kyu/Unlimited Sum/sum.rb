# Kata:
# https://www.codewars.com/kata/536c738e49aa8b663b000301

# Example:

# Solution:
def sum(*arg)
  arg.keep_if{ |v| v.class == Integer }.inject(&:+)
end