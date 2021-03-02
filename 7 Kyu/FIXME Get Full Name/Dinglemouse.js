// Kata:
// https://www.codewars.com/kata/597c684822bc9388f600010f

// Example:

// Solution:
class Dinglemouse{

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    if (this.firstName == '') return this.lastName
    if (this.lastName == '') return this.firstName
    return `${this.firstName} ${this.lastName}`
  }
}