/* Write a function that returns the next to last word in the String passed to 
it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words. */

function penultimate(string) {
	let words = string.split(' ');
	return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/* Suppose we need a function that retrieves the middle word of a phrase/sentence. 
What edge cases need to be considered? How would you handle those edge cases without 
ignoring them? Write a function that returns the middle word of a phrase or sentence. 
It should handle all of the edge cases you thought of. */

function middle(string) {
	let words = string.split(' ');
	if (words.length % 2 === 0) {
		console.log("Even number of words. Cannot return middle word.")
		return 0;
	}
	else {
		return words[(words.length - 1) / 2];
	}
}

console.log(middle("la di da di da") === "da"); // logs true
console.log(middle("la di da di da da") === "da"); // logs false