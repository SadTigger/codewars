# Kata:
# https://www.codewars.com/kata/5933a1f8552bc2750a0000ed

# Example:

# Solution:
def nth_even(n)
  # (n*2-1).times.select(&:even?).last if n != 0 #Completed in 128ms
  # (0..n*2-1).select(&:even?).last if n != 0 #Completed in 135ms
  # (0..n*2-1).find_all(&:even?).last # Completed in 128ms
  # (0..n*2-1).reject(&:odd?).last # Completed in 131ms
  # (n*2-1).times.reject(&:odd?).last # Completed in 130ms
  # (0..n*2-1).reverse_each.detect(&:even?) # Completed in 69ms
  # (0..n*2-1).reverse_each.find(&:even?) # Completed in 68ms
  # (n*2-1).times.find_all(&:even?).last #Completed in 126ms
  # (0..n*2-1).find_all(&:even?).pop # Completed in 131ms
  p n*2-2
end