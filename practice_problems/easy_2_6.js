// Create a new array that contains all of the following values, but in 
// an un-nested format:

// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let flintstones = ["Fred", "Wilma"];
let addition1 = ["Barney", "Betty"];
let addition2 = ["Bambam", "Pebbles"];

let updatedFlintstones = flintstones.concat(addition1).concat(addition2);
console.log(updatedFlintstones);

// array.prototype.concat() method works identically to the string.prototype.concat()
// method, returning a new array