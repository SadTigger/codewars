// Kata:
// https://www.codewars.com/kata/56f695399400f5d9ef000af5

// Example:

// Solution:
const correctTail = (body, tail) => {
  const sub = body[body.length-(tail.length)];
  return sub === tail ? true : false;
}