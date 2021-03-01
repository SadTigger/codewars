// Kata:
// https://www.codewars.com/kata/5262119038c0985a5b00029f

// Example:

// Solution:
const isPrime = (num) => {
  if (num == 0 || num == 1 || num < 0) {
    return false
  }

  for(let i = 2; i <= Math.sqrt(num) ; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
