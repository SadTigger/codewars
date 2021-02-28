// Kata:
// https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript

// Instructions:
// While making a game, your partner, Greg, decided to create a function to check
// if the user is still alive called checkAlive/CheckAlive/check_alive.
// Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0
// or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

// Example:

// Sample test:
// Test.assertEquals(checkAlive(5), true)
// Test.assertEquals(checkAlive(0), false)

// Solution:
const checkAlive = (health) => {
    return health < 1 ? false : true;
}