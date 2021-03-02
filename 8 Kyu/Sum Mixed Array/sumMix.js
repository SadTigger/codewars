// Kata:
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// Example:

// Solution:
const sumMix = (x) => {
  const answer = x.reduce((a, b) => parseInt(a) + parseInt(b));
  return parseInt(answer);
}