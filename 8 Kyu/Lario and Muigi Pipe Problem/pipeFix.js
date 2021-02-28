// Kata:
// https://www.codewars.com/kata/56b29582461215098d00000f

// Example:

// Solution:
const pipeFix = (numbers) => {
    const start = numbers[0];
    const end = numbers[numbers.length - 1];
    return new Array(end + 1 - start).fill().map((_, index) => index + start);
}