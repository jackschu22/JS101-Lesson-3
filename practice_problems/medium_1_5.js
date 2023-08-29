// What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// I thought "0.9" and "true" would be logged, however due to JavaScript's use of
// floating point numbers for all numeric operations, the following was logged:

// 0.8999999999999999
// false