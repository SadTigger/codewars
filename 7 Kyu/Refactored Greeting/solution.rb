# Kata:
# https://www.codewars.com/kata/5121303128ef4b495f000001

# Example:

# Solution:
class Person

def initialize(name)
  @name = name
end

def name
  @name
end

def greet(yourName)
  "Hello #{yourName}, my name is #{self.name}"
end

end 

joe = Person.new('Joe')
joe.greet('Kate')
