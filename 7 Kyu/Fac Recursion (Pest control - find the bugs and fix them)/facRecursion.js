// Kata:
// https://www.codewars.com/kata/57fa92b25c9910e7bc0001df/train/javascript/602b7b70fe0bd2002b3e5a46

// Instructions:
// The code is a recursive attempt in calculating the result of a factorial function.
// I.e. the result of 3! (Factorial of 3) is 3x2x1 = 6.
// In case of 0! the result is 1 and in case of a negative factorial the result should be 0.

// The goal is to find the bugs in the sourcecode and fix them (play a little pest control).

// Example:

// Sample test:
// Test.assertEquals(facRecursion(1), 1, "Should return 1");
// Test.assertEquals(facRecursion(4), 24, "Should return 24");

// Solution:
function facRecursion(value){
  if (value < 0) return 0;
  if (value === 1 || value === 0) return 1;
  return value * facRecursion(value - 1);
}