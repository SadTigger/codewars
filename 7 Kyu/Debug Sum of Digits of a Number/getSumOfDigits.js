// Kata:
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba

// Example:

// Solution:
const getSumOfDigits = (integer) => {
  let sum = 0;
  let digits = Math.floor(integer).toString();
  for(let ix = 0; ix < digits.length; ix++) {
    sum += parseInt(digits[ix]);
  }
  return sum;
}