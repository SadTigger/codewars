// Kata:
// https://www.codewars.com/kata/56368f37d464c0a43c00007f

// Instructions:
// Debug a function called calculate that takes 3 values.
// The first and third values are numbers. The second value is a character.
// If the character is "+" , "-", "*", or "/", the function will return
// the result of the corresponding mathematical function on the two numbers.
// If the string is not one of the specified characters, the function should return null.

// Example:
// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null

// Sample test:
// Test.assertEquals(calculate(2,"+", 4), 6);
// Test.assertEquals(calculate(6,"-", 1.5), 4.5);
// Test.assertEquals(calculate(-4,"*", 8), -32);
// Test.assertEquals(calculate(49,"/", -7), -7);
// Test.assertEquals(calculate(8,"m", 2), null);
// Test.assertEquals(calculate(4,"/",0), null);

// Solution:
const calculate = (a, operator, b) => {
   
    if(operator === "+") { 
      return a + b;
    }
   
    if(operator === "-") {
        return a - b;
    }
   
    if(operator === "/") { 
      return b !== 0 ? a / b : null;
    }

    if(operator === "*") {
      return a * b;
    }

    return null;  
}   