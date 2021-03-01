// Kata:
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// Example:

// Solution:
const positiveSum = (arr) => {
  const sum = arr.filter(el => el > 0);
  return sum.length === 0 ? 0 : sum.reduce( (a,b) => a + b);
}