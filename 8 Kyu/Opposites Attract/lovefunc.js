// Kata:
// https://www.codewars.com/kata/555086d53eac039a2a000083

// Example:

// Solution:
const lovefunc = (flower1, flower2) => {
  if (flower1 === flower2 && flower1 % 2 === 0) return false;
  return (flower1 + flower2) % 2 === 0 ? false : true;
}