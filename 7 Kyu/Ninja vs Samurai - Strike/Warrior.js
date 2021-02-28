// Kata:
// https://www.codewars.com/kata/517b0f33cd023d848d000001

// Instructions:
// Something is wrong with our Warrior class.
// The strike method does not work correctly.
// The following shows an example of this code being used:

// Example:
// var ninja = new Warrior('Ninja');
// var samurai = new Warrior('Samurai');

// samurai.strike(ninja, 3);
// ninja.health should == 70

// Sample test:
// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
//     // Test.assertEquals(1 + 1, 2);
//     // assert.strictEqual(1 + 1, 2);
//   });
// });

// Solution:
class Warrior {
  constructor(name) {
    this.name = name;  
    this.health = 100;
  }
  
  strike(enemy, swings) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));   
  }
}