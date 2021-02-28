// Kata:
// https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript

// Instructions:
// Write a function which partitions a list of items based on a given predicate.

// After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] 
// where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).

// NOTE: the partitioning should be stable; in other words: 
// the ordering of the Fs (resp. Ts) should be preserved relative to each other.

// For convenience and utility, the partition function should return the boundary index.
// In other words: the index of the first T value in items.

// Example:
// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);
// items should now be [1, 3, 5, 2, 4, 6]
// i     should now be 3

// Sample test:
// var items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);
// Test.assertEquals( i, 3, 'partioned at 3' );
// Test.assertSimilar( items.slice(0, i), [1, 3, 5] );
// Test.assertSimilar( items.slice(i),    [2, 4, 6] );

// Solution:
const partitionOn = (pred, items) => {
  const trueArr = items.filter(elem => pred(elem));
  const falseArr = items.filter(elem => !pred(elem));
  items.splice(0);
  items.push(...falseArr.concat(trueArr));
    
  return falseArr.length;
}