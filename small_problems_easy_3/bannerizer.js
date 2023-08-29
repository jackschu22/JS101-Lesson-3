/* Write a function that will take a short line of text, and write it to the 
console log within a box. 

Example: 

logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

*/
const DASH_X = "-";
const DASH_Y = "|";
const CORNER = "+";
const SPACE = " ";

function logInBox(string) {
	console.log(`${CORNER}${DASH_X.repeat(string.length + 2)}${CORNER}`);
	console.log(`${DASH_Y}${SPACE.repeat(string.length + 2)}${DASH_Y}`);
	console.log(`${DASH_Y}${SPACE}${string}${SPACE}${DASH_Y}`);
	console.log(`${DASH_Y}${SPACE.repeat(string.length + 2)}${DASH_Y}`);
	console.log(`${CORNER}${DASH_X.repeat(string.length + 2)}${CORNER}`);
}

let ex1 = 'I am at my wit\'\s end';
let ex2 = ' ';
logInBox(ex1);
logInBox(ex2);