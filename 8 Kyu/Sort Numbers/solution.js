// Kata:
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

// Example:

// Solution:
const solution = (nums) => !Array.isArray(nums) ? [] : nums.sort((a,b) => a - b);