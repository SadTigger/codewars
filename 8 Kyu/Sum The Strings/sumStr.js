// Kata:
// https://www.codewars.com/kata/5966e33c4e686b508700002d/

// Instructions:
// Create a function that takes 2 positive integers 
// in form of a string as an input, and outputs the sum (also as a string).

// If either input is an empty string, consider it as zero.

// Example:
sumStr("4", "5")    // should output "9"
sumStr("34", "5")   // should output "39"

// Sample test:
// Test.assertEquals(sumStr("4","5"), "9");
// Test.assertEquals(sumStr("34","5"), "39");

// Solution:
const sumStr = (a,b) => String(Number(a) + Number(b));