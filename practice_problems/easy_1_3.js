// Determine whether the following object of people and their age contains 
// an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

function includesSpot(people) {
	if (people.hasOwnProperty("Spot")) {
		console.log("Found Spot!");
		return true;
	}
	else {
		console.log("Can't find Spot.");
		return false;
	}
}

includesSpot(ages);