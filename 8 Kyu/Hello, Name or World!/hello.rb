# Kata:
# https://www.codewars.com/kata/57e3f79c9cb119374600046b

# Example:

# Solution:
def hello(*name)
  if name.empty? || name[0].empty?
    "Hello, World!"
  else
    "Hello, #{name[0].downcase.capitalize}!"
  end
end