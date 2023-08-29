// Show two different ways to put the expected "Four score and " in front of the string

let famousWords = "seven years ago...";
let firstPart = "Four score and ";

console.log(firstPart + famousWords);
console.log(firstPart.concat(famousWords));
console.log(`${firstPart}${famousWords}`);