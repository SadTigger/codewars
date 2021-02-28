# https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

# Instructions:
# Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

# Example:

# myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
# None of the arrays will be empty, so you don't have to worry about that!

# Sample tests

# Test.describe("Basic tests") do
#     Test.assert_equals(remove_every_other(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again'])
#     Test.assert_equals(remove_every_other([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9])
#     Test.assert_equals(remove_every_other([[1, 2]]), [[1, 2]])
#     Test.assert_equals(remove_every_other([['Goodbye'], {'Great': 'Job'}]), [['Goodbye']])
#     Test.assert_equals(remove_every_other([]), [])
# end

def remove_every_other(arr)
    arr.select.each_with_index { |el, index| index % 2 == 0 }
end
