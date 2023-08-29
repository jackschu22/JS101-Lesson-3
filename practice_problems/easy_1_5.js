// What will the following code output?

console.log(false == '0');		// true, non-strict comparison, '0' coerced to 
								// number 0 which is falsy
								
console.log(false === '0');		// false, strict comparison