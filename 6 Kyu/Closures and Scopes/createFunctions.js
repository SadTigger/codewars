// Kata:
// https://www.codewars.com/kata/526ec46d6f5e255e150002d1/train/javascript

// Instructions:
// We want to create a function, which returns an array of functions, which return their index in the array.
// We already implemented that function, but when we actually run the code,
// the result doesn't look like what we expected. Can you spot, what's wrong with it?
// A test fixture is also available


// Example:
// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3

// Sample test:
// describe('example tests', function() {
//     it('functions must return correct number', function() {
//       var callbacks = createFunctions(5);
  
//       for (var i=0; i<callbacks.length; i++) {
//         Test.assertEquals(callbacks[i](), i, 'Function with index ' + i);
//       }
//     });
// });

// Solution:
const createFunctions = n => {
    const callbacks = [];
  
    for (let i = 0; i < n; i++) {
      callbacks.push(function() {
        return i;
      });
    }
  
    return callbacks;
}