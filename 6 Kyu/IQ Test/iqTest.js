// Kata:
// https://www.codewars.com/kata/552c028c030765286c00007d

// Example:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

// Solution:
const iqTest = (numbers) => {
    const result = numbers.split(' ');
    const odd = result.filter((x) => x % 2 === 0);
    const even = result.filter((x) => x % 2 === 1);
    return even.length > 1 ?  result.indexOf(odd[0]) + 1 : result.indexOf(even[0]) + 1;
}