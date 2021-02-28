// Kata:
// https://www.codewars.com/kata/565d6d1696e154b51b000076

// Instructions:
// There is some horribly rotten script that is not required in your project anymore,
// and it is affecting the way your code is supposed to work.

// For some reason you don't have an access to that rotten peice of code
// but you want to get your code working as expected in any possible way.

// Go and get it working!

// Example:

// Sample test:
// Test.describe("Testing if it works right...", function() {
//     Test.assertEquals(semicolonSeparationToCommaSeparation("1;2;3"), "1,2,3");
// });

// Solution:
const semicolonSeparationToCommaSeparation = (input) => {
    let [a, b, c] = input.split(";");
    return `${a},${b},${c}`;
}