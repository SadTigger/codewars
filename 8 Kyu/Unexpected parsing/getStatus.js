// Kata:
// https://www.codewars.com/kata/54fdaa4a50f167b5c000005

// Example:

// Solution:
const getStatus = (isBusy) => {
  const msg = isBusy ? "busy" : "available";
  return {
    status: msg
  };
}