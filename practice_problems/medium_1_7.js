// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);		// 42 - 8 => 34

// The variable answer is a number and as such is a primative, immutable value. answer is
// passed as an argument to the messWithIt function, 8 is added to it, and that value is
// assigned to the variable newAnswer, but answer remains unchanged.

