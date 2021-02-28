// Kata:
// https://www.codewars.com/kata/5977618080ef220766000022

// Example:
// usdcny(15) // => '101.25 Chinese Yuan'
// usdcny(465) // => '3138.75 Chinese Yuan'

// Solution:
const usdcny = (usd) => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;