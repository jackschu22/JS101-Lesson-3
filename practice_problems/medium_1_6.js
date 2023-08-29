// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Bonus: How can you reliably test if a value is NaN?

// To answer both questions, NaN is the only value in JavaScript that does not equal
// itself. As a result, the code snippet above will log "false." You can reliably test if a
// value is NaN by doing the following:

let number = NaN;

// Does number not equal itself? If it doesn't equal itself, it's NaN
console.log(number !== number);		// true => number is Nan

// You can also use the built-in Number.isNaN() method
console.log(Number.isNaN(nanArray[0])); // true