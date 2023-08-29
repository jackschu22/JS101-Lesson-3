// How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWithEx(string) {
	if (string.endsWith("!")) {
		console.log("This string ends with !!!!");
		return true;
	}
	else {
		console.log("This string doesn't end with ! :/");
		return false;
	}
}

endsWithEx(str1);
endsWithEx(str2);