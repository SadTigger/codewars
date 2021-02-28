// Kata:
// https://www.codewars.com/kata/53573877d5493b4d6e00050c

// Example:

// Solution:
const capital = (capitals) => {
    const arr = capitals.map(el => `The capital of ${Object.values(el)[0]} is ${el.capital}`);
    return arr;
}