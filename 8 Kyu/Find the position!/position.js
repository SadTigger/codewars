// Kata:
// https://www.codewars.com/kata/5808e2006b65bff35500008f

// Example:
// Input :: "a"
// Ouput :: "Position of alphabet: 1"

// Solution:
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const position = (letter) => `Position of alphabet: ${ALPHABET.indexOf(letter) + 1}`;