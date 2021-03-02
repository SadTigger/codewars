// Kata:
// https://www.codewars.com/kata/58dd98fe8d29b0f30d0002bd

// Example:

// Solution:
const objectType = (...args) => args.length === 0 ? Object.prototype.toString.call(null) : Object.prototype.toString.call(...args);