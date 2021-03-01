# Kata:
# https://www.codewars.com/kata/57fd696e26b06857eb0011e7

# Example:

# Solution:
def dative word
  frontexp = /e|é|i|í|ö|ő|ü|ű/
  backexp = /a|á|o|ó|u|ú/
  last = word.split(//).select { |el| el =~ frontexp || el =~ backexp  }.last
  return word if word.include?('nak') || word.include?('nek')
  return word + 'nek' if last =~ frontexp
  return word + 'nak' if last =~ backexp
end