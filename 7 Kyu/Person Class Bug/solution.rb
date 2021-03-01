# Kata:
# https://www.codewars.com/kata/513f887e484edf3eb3000001

# Example:

# Solution:
class Person
  def initialize(firstName, lastName, age)
    @firstName = firstName
    @lastName = lastName
    @age = age
  end
  
  def full_name
    "#{@firstName} #{@lastName}"
  end
  
  def age
    @age
  end
  
end