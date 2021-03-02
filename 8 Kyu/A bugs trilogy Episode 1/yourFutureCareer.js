// Kata:
// https://www.codewars.com/kata/562e98755e9214cd2500003d

// Example:

// Solution:
const yourFutureCareer = () => {
	const career = Math.random();
	if (career <= 0.32) return "FrontEnd Developer";
    if (career <= 0.65) return "BackEnd Developer";
	return 'Full-Stack Developer';
}