/* Madlibs is a simple game where you create a story template with "blanks" for words. 
You, or another player, then construct a list of words and place them into the story, 
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an 
adjective, and injects them into a story that you create. */

let rlSync = require('readline-sync');
let noun = rlSync.question("Enter a noun: ");
let verb = rlSync.question("Enter a verb: ");
let adjective = rlSync.question("Enter an adjective: ");
let adverb = rlSync.question("Enter an adverb: ");

console.log(`I can't wait to sleep on my ${noun}. It will feel so ${adjective} to sleep ${adverb}. And then I'll ${verb}!`);