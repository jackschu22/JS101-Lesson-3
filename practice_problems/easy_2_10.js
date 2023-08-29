// Write a one-line expression to count the number of lower-case t characters in 
// each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// split strings into arrays of single characters
// filter array by entries that meet condition ( === 't'), return new array of t's
// count length of new array to obtain number of t's in original string

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);