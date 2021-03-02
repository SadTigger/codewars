// Kata:
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// Example:

// Solution:
const XO = (str) => {
  if (!str.match(/x|X/g) && !str.match(/o|O/g)) return true;
  if (!str.match(/x|X/g) || !str.match(/o|O/g)) return false;
  return str.match(/x|X/g).length == str.match(/o|O/g).length;
}