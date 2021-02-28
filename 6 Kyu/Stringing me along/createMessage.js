// Kata:
// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e/train/javascript

// Instructions:
// Implement a function that receives a string, and lets you extend it with repeated calls.
// When no argument is passed you should return a string consisting of space-separated words
// you've received earlier.

// Note: there will always be at least 1 string; all inputs will be non-empty.

// Example:
// createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"

// Sample test:
// Test.assertEquals(createMessage("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?");

// Solution:
const createMessage = (str) => {
    return (nextStr) => {
      return nextStr === undefined ? str : createMessage(str + ' ' + nextStr);
    };
}