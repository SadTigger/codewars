// Kata:
// https://www.codewars.com/kata/52cd53948d673a6e66000576

// Example:

// Solution:
const search = (searchTerm) => {
  let search = new RegExp(searchTerm, 'i');
  return TITLES.filter((title) => {return search.test(title)});
}