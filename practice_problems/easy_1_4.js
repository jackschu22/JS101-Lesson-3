/* Using the following string, create a new string that contains all lowercase 
letters except for the first character, which should be capitalized. 
(See the example output.) */

let munstersDescription = "the Munsters are CREEPY and Spooky.";

function formatString(string) {
	return string[0].toUpperCase() + string.toLowerCase().slice(1);
}

console.log(formatString(munstersDescription));
// => The munsters are creepy and spooky.