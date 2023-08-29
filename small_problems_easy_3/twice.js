/* A double number is an even-length number whose left-side digits are exactly 
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are 
all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by 
two, unless the argument is a double number; otherwise, return the double 
number as-is. */


/* Bonus: Modify twice to return the number provided as an argument multiplied by 
two, unless the argument is a palindromic number; otherwise, return the palindromic 
number as-is. */

function twiceMirror(num) {

	let stringNum = String(num);

	if (stringNum.length % 2 === 0) {
		let secondHalfReversed = stringNum.slice((stringNum.length / 2), stringNum.length)
																			.split('')
																			.reverse()
																			.join('');
		if (stringNum.slice(0, (stringNum.length / 2)) === secondHalfReversed) {
			return stringNum;
		}
	}
	return num * 2;
}

console.log(twiceMirror(37));          // 74
console.log(twiceMirror(44));          // 44
console.log(twiceMirror(334433));      // 668866
console.log(twiceMirror(444));         // 888
console.log(twiceMirror(107));         // 214
console.log(twiceMirror(103103));      // 103103
console.log(twiceMirror(3333));        // 3333
console.log(twiceMirror(7676));        // 7676