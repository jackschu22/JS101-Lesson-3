// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);		// => hello there
console.log(str2);		// => goodbye!

// Strings are primitives values and immutable, thus assigning str2 the 
// value of str1 on line 4 does not mean that str1 and str2 point to the same
// location in memory. They point to two different locations in memory
// that happen to have the same value. As a result, altering the value of 
// str2 on line 5 does not affect str1, which when logged is still equal
// to "hello there"
