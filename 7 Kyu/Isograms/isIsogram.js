// Kata:
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// Example:

// Solution:
const isIsogram = (str) => {
  if (str.length == 0) return true;
  const chars = str.toLowerCase().split('');
  let x = (chars) => chars.filter((v,i) => chars.indexOf(v) === i);
  return x(chars).join('') == str.toLowerCase();
}