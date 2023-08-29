/* Write a function that determines the mean (average) of the three scores 
passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for 
negative values or values greater than 100. */

function getGrade(score1, score2, score3) {
	let avg = Math.round((score1 + score2 + score3) / 3);
	let letter = "";

	if (avg >= 0 && avg < 60) {
		letter = "F"
	}
	else if (avg >= 60 && avg < 70) {
		letter = "D"
	}
	else if (avg >= 70 && avg < 80) {
		letter = "C"
	}
	else if (avg >= 80 && avg < 90) {
		letter = "B"
	}
	else {
		letter = "A";
	}
	return letter;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"