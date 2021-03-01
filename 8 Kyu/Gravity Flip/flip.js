// Kata:
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

// Example:

// Solution:
const flip = (d, a)=>{
    switch(d) {
        case 'R':
          return a.sort((first, second) => first - second);
        case 'L':
          return a.sort((first, second) => second - first);
    };
}