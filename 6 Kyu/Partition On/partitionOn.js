// Kata:
// https://www.codewars.com/kata/525a037c82bf42b9f800029b

// Example:

// Solution:
const partitionOn = (pred, items) => {
    const trueArr = items.filter(elem => pred(elem));
    const falseArr = items.filter(elem => !pred(elem));
    items.splice(0);
    items.push(...falseArr.concat(trueArr));
      
    return falseArr.length;
}