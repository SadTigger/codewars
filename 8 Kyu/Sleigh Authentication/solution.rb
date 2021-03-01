# Kata:
# https://www.codewars.com/kata/52adc142b2651f25a8000643

# Example:

# Solution:
class Sleigh
  def authenticate(name, password)
    password == "Ho Ho Ho!" ? 
      name == "Santa Claus" ? true : false 
      :
      false
  end
end