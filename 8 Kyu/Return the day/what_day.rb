# Kata:
# https://www.codewars.com/kata/59dd3ccdded72fc78b000b25

# Example:

# Solution:
def what_day?(n)
  week = { 1 => "Sunday",
           2 => "Monday",
           3 => "Tuesday",
           4 => "Wednesday",
           5 => "Thursday",
           6 => "Friday",
           7 => "Saturday" }
  (1..7) === n ? week[n] : 'Wrong, please enter a number between 1 and 7'
end