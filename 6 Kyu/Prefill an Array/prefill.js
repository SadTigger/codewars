// Kata:
// https://www.codewars.com/kata/54129112fb7c188740000162

// Example:

// Solution:
const prefill = (n, v) => {
    if(n === 0 || n === '0') return [];
    if ( !parseInt(n) || parseInt(n) < 0 || parseInt(n) !== Number(n))  {
      throw new TypeError(`${n} is invalid`);
    };
    return new Array(n).fill(v);
}