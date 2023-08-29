/* Write a function that takes a string argument and returns a new string 
that contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character. */

function crunch(string) {
	let crunchedString = "";
	let index = 0;

	while (index < string.length) {
		if (string[index] !== string[index + 1]) {
			crunchedString += string[index];
		}
		index += 1;
	}
	return crunchedString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""