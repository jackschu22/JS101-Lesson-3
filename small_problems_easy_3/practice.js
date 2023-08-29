// Explain the output of this code snippet and why it is so?

const isEmpty = value => {
  if (value.length > 0) return false;
  if (value.length === 0) return true;
  return Object.keys(value).length === 0;
}

let arr = [];
arr["foo"] = "bar";     // not an enumerable property, doesn't count towards length property
arr[-1] = "boo";        // not an enumerable property, doesn't count towards length property

let sparseArr = [];
sparseArr.length = 3;  // sparseArr = [ , , ] -- contains 3 empty elements, 
                       // the indexes exist with no associated values (undefined)

console.log(isEmpty([]));     // true
console.log(isEmpty(arr));    // true
console.log(isEmpty(['Janice']));    // false
console.log(isEmpty(sparseArr));     // false

/* On line 3, the function `isEmpty` is declared as an arrow function. In the function body
from lines 4-6, the function checks whether the object passed in as an argument has a non-zero
length using the object.length property. If it has a non-zero length, the function returns
false. If its length strictly equals 0, the function returns true.