// Kata:
// https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript


// Instructions:
// Given an input n, write a function always that returns a function which returns n.
// Ruby should return a lambda or a proc.

// Example:
// var three = always(3);
// three(); // returns 3

// Sample test:
// Test.expect(always(true)(), 'A function that is always true will return true')

// Solution:
const always = (n) => { return () => n; }