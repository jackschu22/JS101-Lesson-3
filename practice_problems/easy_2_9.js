// Back in the stone age (before CSS), we used spaces to align things on the screen. 
// If we have a 40-character wide table of Flintstone family members, how can we center 
// the following title above the table with spaces?

let title = "Flintstone Family Members";

const TABLE_LENGTH = 40;
const TITLE_LENGTH = title.length;
const TOTAL_PADDING = TABLE_LENGTH - TITLE_LENGTH;
const SIDE_PADDING = TOTAL_PADDING / 2;
const PADDING_UNIT = " ";

function center(title) {
	console.log(PADDING_UNIT.repeat(SIDE_PADDING) + title);
}

center(title);

// can also use the String.prototype.padStart() method