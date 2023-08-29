// One day, Spot was playing with the Munster family's home computer, and he wrote 
// a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

// Did the family's data get ransacked? Why or why not?

// Whether or not the family's data was corrupted depends upon whether the entries were 
// mutated. The Object.values() method returns an array of the values in an object, which
// in the case of the munsters object, is also an array of objects. In JavaScript, objects 
// are passed by reference, so when Spot adds 42 to each age and alters each gender, he is 
// doing this to the original object being referenced. Thus, the data was corrupted.
