// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days 
// before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, 
// with each line indented 1 space to the right of the line above it. The output should 
// start out like this:

/* The Flintstones Rock!
    The Flintstones Rock!
     The Flintstones Rock!
   ... */

let phrase = "The Flintstones Rock!";
let padding = "";

// add one space to padding with each iteration, begin with 0 padding
for (let i = 0; i < 10; i += 1) {
	console.log(padding + phrase);
	padding += " ";
}