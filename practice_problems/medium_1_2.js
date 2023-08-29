// Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";

function swapCase(string) {
	let swappedString = "";

	for (let i = 0; i < string.length; i += 1) {
		if (string[i] === " ") {
			swappedString += string[i];
		}
		else if (string[i] === string[i].toUpperCase()) {
			swappedString += string[i].toLowerCase();
		}
		else {
			swappedString += string[i].toUpperCase();
		}
	}
	return swappedString;
}

console.log(swapCase(munstersDescription));