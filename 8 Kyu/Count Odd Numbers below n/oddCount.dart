// Kata:
// https://www.codewars.com/kata/59342039eb450e39970000a6

// Example:

// Solution:
int oddCount(n) {
  var count = 0;
  for (int i = 0; i < n; i++ ) {
    if (i.isOdd) {
      count += 1;
    }
  }
  return count;
}