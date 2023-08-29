// Determine whether the name Dino appears in the strings below -- 
// check each string separately:

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function containsDino(str) {
	if (str.includes("Dino")) {
		console.log("We found Dino!");
		return true;
	}
	else {
		console.log("Dino isn't here.");
		return false
	}
}

containsDino(str1);		// Dino isn't here.
containsDino(str2);		// "We found Dino!
