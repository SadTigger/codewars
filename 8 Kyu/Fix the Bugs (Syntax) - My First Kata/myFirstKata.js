// Kata:
// https://www.codewars.com/kata/56aed32a154d33a1f3000018

// Example:

// Solution:
const myFirstKata = (a, b) => typeof(a) != "number" || typeof(b) != "number" ? false : a % b + b % a;