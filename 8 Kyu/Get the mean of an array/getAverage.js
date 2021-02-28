// Kata:
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// Solution:
const getAverage = (marks) => Math.floor(marks.reduce((a, b) => a + b) / (marks.length));