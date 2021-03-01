// Kata:
// https://www.codewars.com/kata/52efefcbcdf57161d4000091

// Example:

// Solution:
const count = (string) => {  
  if (string == '') {
    return {};
  }
  
  const arr = string.split('').sort();  

  const unique = [...new Set(arr)];
  
  const dup = unique.map(value => [value, arr.filter(str => (str === value)).length] );

  const result = dup.reduce((prev, curr) => {
    prev[curr[0]] = curr[1];
    return prev;
  },{});
  
  return result;
}