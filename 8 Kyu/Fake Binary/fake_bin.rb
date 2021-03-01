# Kata:
# https://www.codewars.com/kata/57eae65a4321032ce000002d

# Example:

# Solution:
def fake_bin(s)
  s.split('').map do |c|
    if c.to_i > 5 || c.to_i == 5
      c = '1' 
    elsif c.to_i < 5 
      c = '0' 
    end
  end.join
end