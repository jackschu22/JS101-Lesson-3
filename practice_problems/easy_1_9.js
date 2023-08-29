// How can we add multiple items to our array? ('Dino' and 'Hoppy')

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

function addDinoAndHoppy(family) {
	flintstones.push("Dino", "Hoppy");
	return flintstones;
}

console.log(addDinoAndHoppy(flintstones));