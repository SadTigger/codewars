// Kata:
// https://www.codewars.com/kata/595970246c9b8fa0a8000086

// Example:

// Solution:
const capitalizeWord = (word) => {
  let array = word.split('')
  array[0] = array[0].toUpperCase();
  return array.join('').toString();
}