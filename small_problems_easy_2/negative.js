/* Write a function that takes a number as an argument. If the argument is a positive 
number, return the negative of that number. If the argument is a negative number, 
return it as-is. */

function negative1(num) {
	if (num < 0) {
		return num;
	}
	else {
		return num * -1;
	}
}

function negative2(num) {
	return Math.abs(num) * -1;
}

function negative3(num) {
	return num < 0 ? num : num * -1;
}

console.log(negative1(5));     // -5
console.log(negative2(-3));    // -3
console.log(negative3(0));     // -0