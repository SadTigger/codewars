# Kata:
# https://www.codewars.com/kata/5aff237c578a14752d0035ae

# Example:

# Solution:
def predict_age(age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8)
  ([age_1, age_2, age_3, age_4, age_5, age_6, age_7, age_8].map! { |age| age ** 2 }.reduce(0, :+) ** 0.5).div(2)
end