// Given a string, return a new string that replaces every occurrence 
// of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.replace("important", "urgent");
console.log(newAdvice);

// can use the string.prototype.replaceAll() method to replace all instances
// of a target string
