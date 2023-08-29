// Explain the output of this code snippet and why it is so?

const fruits = ['apple', 'banana', 'mango', 'orange'];
for (let fruit of fruits) {
    if (fruit === 'mango') {
        console.log('I love mangoes!');
    } else {
        console.log(`I don't like ${fruit}s.`);
    }
};

/*

User-level explanation: 

High-level explanation: On line 3 the constant global variable fruits is initialized
to an array containing four strings. On line 4, the program enters a for/of loop that
iterates through each element of the `fruits` array and temporarily assigns each value 
of `fruits` to the locally scoped variable `fruit`. On each iteration, within the body 
of the loop, the value of `fruit` is strictly compared with the string 'mango'. If they
are equivalent, the string 'I love mangoes!' is logged to the console. Otherwise, the
template literal `I don't like ${fruit}` is logged.
*/

// for/of loop iterates through values, for/in loop iterates through keys