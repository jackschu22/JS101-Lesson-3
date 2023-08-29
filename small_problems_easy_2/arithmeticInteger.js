/* Write a program that prompts the user for two positive integers, and then 
prints the results of the following operations on those two numbers: addition, 
subtraction, product, quotient, remainder, and power. Do not worry about validating 
the input. */

let rlSync = require('readline-sync');

console.log("==> Enter the first number:")
let num1 = Number(rlSync.question());

console.log("==> Enter the second number:")
let num2 = Number(rlSync.question());

let sum = num1 + num2;
let diff = num1 - num2;
let prod = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
let exp = num1 ** num2;

console.log(`==> ${num1} + ${num2} = ${sum}`)
console.log(`==> ${num1} - ${num2} = ${diff}`)
console.log(`==> ${num1} * ${num2} = ${prod}`)
console.log(`==> ${num1} / ${num2} = ${div.toFixed(2)}`)
console.log(`==> ${num1} % ${num2} = ${mod}`)
console.log(`==> ${num1} ** ${num2} = ${exp}`)
