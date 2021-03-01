# Kata:
# https://www.codewars.com/kata/53d16bd82578b1fb5b00128c

# Example:

# Solution:
def grader(score)
  p score
  case 
  when (score > 1 || score < 0.6)  
  "F"
  when ( score >= 0.9) 
  "A"
  when (score >= 0.8) 
  "B"
  when (score >= 0.7) 
  "C"
  when (score >= 0.6) 
  "D"
  end
end