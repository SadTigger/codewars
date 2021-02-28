// Kata:
// https://www.codewars.com/kata/580e67ae22e42d797000015e/train/javascript

// Instructions:
// Chingel was creating a function which would return true if the input followed this time format
// 14-10-2016 01:12 and false otherwise.
// But looks like he has messed it up.
// Could you help him out? Please!

// Rank and Upvote if you liked it :D

// P.S.- Random tests to be added soon.

// Example:

// Sample test:
// Test.assertEquals(isItBugged("01_09_2016 01:20"), false);
// Test.assertEquals(isItBugged("14-10-1066 12:00"), true);
// Test.assertEquals(isItBugged("Tenth of January"), false);

// Solution:
const isItBugged = code => { 
    const regexp = /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/i;
    return regexp.test(code); 
}