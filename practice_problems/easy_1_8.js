// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

function addDino(family) {
	flintstones[flintstones.length] = "Dino";
	return flintstones;
}

console.log(addDino(flintstones));