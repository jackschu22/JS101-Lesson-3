// Given a number and an array, determine whether the number is included in 
// the array.

function inArray(array, number) {
	
	for (let i = 0; i < array.length; i += 1) {
		if (array[i] === number) {
			console.log(`True! ${number} is in the array.`);
			return true;
		}
	}
	console.log(`False! ${number} is not in the array.`);
	return false;
}

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

inArray(numbers, number1);
inArray(numbers, number2);
