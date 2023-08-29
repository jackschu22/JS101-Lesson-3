const a = [1, 2, 3];

a = a.concat(4);  // concat method returns new array, which is assigned to const a, TypeError

console.log(a);   


const a = [1, 2, 3];

a = a.push(4);  // push method returns 4, which is assigned to const a, TypeError

console.log(a);    


const a = [1, 2, 3];

let b = a.push(4);  // push method returns 4, which is assigned to b

console.log(b);    // returns 4 