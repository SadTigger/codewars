# Kata:
# https://www.codewars.com/kata/577bd026df78c19bca0002c0

# Example:

# Solution:
def correct(string)
  replacements = {'5' => 'S', '0' => 'O','1' => 'I'}
  string.gsub(Regexp.union(replacements.keys), replacements)
end