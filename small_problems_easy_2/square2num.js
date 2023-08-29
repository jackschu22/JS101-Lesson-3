/* Using the multiply() function from the "Multiplying Two Numbers" problem, 
write a function that computes the square of its argument (the square is the 
result of multiplying a number by itself).

Example:

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

*/

function multiply(num1, num2) {
	return num1 * num2;
}

function square(num) {
	return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

/* Further Exploration
What if we wanted generalize this function to a "power to the n" type function: 
cubed, to the 4th power, to the 5th, etc. How would we go about doing so while 
still using the multiply() function? */

function power(num, power) {
	let product = num;

	for (let i = 2; i <= power; i += 1) {
		product = multiply(product, num);
	}
	return product;
}

console.log(power(2, 3)); // logs 8
console.log(power(5, 8)); // logs 390625