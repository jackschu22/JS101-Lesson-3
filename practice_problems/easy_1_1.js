// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// No, an error will not be raised. It is valid to assign entries to an array 
// beyond the bounds of its present length.

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

// numbers[4] will return 'undefined' however the entry at index 4 is empty and does
// not have a value, not even 'undefined'. This is shown below:

numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]