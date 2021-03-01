# Kata:
# https://www.codewars.com/kata/59bd5dc270a3b7350c00008b

# Example:

# Solution:
def check_the_bucket(bucket):
    for i in bucket:
        if i == 'gold':
            return True
    return False