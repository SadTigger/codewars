# Kata:
# https://www.codewars.com/kata/55b42574ff091733d900002f

# Example:

# Solution:
def friend(friends)
  friends.select { |friend| friend.size == 4 }
end