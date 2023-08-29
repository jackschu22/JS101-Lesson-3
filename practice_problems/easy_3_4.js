// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// The first two elements in arr1 and arr2 are *pointers* to two objects, not the
// objects themselves. On line 5, the object that both elements are referencing is mutated
// and the change is reflected in both arrays

// The slice() method returns a shallow copy, where the new array's elements reference the
// same values that the first array does (except for primitve values)