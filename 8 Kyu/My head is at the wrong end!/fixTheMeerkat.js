// Kata:
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

// Example:

// Solution:
const fixTheMeerkat = (arr)  => {
    const result = [];
    for (let i = (arr.length - 1); i >= 0; i -= 1) {
      result.push(arr[i]);
    };
    return result;
}