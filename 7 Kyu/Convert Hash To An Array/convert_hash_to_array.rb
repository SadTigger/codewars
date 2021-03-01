# Kata:
# https://www.codewars.com/kata/59557b2a6e595316ab000046

# Example:

# Solution:
def convert_hash_to_array(hash)
  hash.map { |key, value| key = key.to_s, value }
end