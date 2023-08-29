// Create an array from this object that contains only two elements: 
// Barney's name and Barney's number:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Object.entries() method accepts an object as an argument and returns an array of
// nested key-value pair arrays

let flintstonesEntries = Object.entries(flintstones);
let BarneyEntry = flintstonesEntries[2];
console.log(BarneyEntry);