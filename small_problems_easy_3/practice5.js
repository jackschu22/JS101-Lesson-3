let a = [2, 3, [4, 5], 6];
b = a.slice();

a.push(7);
a[2].push(5.5);

console.log(b);

// What is the output?