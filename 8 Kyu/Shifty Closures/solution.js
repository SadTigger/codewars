// Kata:
// https://www.codewars.com/kata/514aa0dc21607ae236000017

// Example:

// Solution:
const greet = (name) => {
  return () => {
    return `Hello, ${name}!`;
  }
};

let greet_abe = greet('Abe');

let greet_ben = greet('Ben');