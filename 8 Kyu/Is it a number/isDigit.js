// Kata:
// https://www.codewars.com/kata/57126304cdbf63c6770012bd

// Example:

// Solution:
const isDigit = (s) => {
    const digit = s.trim().split(' ');
    if (digit.length == 1) {
      return (!isNaN(parseFloat(digit[0])) && !isNaN(digit[0])) ?  true : false;
    };
    return false;
}