// Kata:
// https://www.codewars.com/kata/54edbc7200b811e956000556

// Example:

// Solution:
const countSheeps = (arrayOfSheep) => {
  let count = 0;
  for (let sheep of arrayOfSheep) {
    if (sheep === true) {
      count++;
    }
  }
  return count;
}