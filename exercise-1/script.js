console.log("Hello World!");

// 1.
let person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    hobbies: [
        "Biking",
        "Mountain Climbing",
        "Swimming",
        "eating",
        "sleeping",
        "bingewatching"
    ]
}
const city = "Lincoln"; // shows up as undefined. currently working on this
const houseNumber = 32;
const state = "Nebraska";
const street = "Washington";
function userInformation (person, city, houseNumber, state, street) {
    console.log(`First Name: ${person.firstName}`);
    console.log(`Last Name: ${person.lastName}`);
    console.log(`Age: ${person.age}`);
    console.log(`Hobbies: ${person.hobbies[0]}, ${person.hobbies[1]}, ${person.hobbies[2]}`);
    console.log(`city: ${city}`);
    console.log(`house Number: ${houseNumber}`);
    console.log(`state: ${state}`);
    console.log(`street: ${street}`);
}
userInformation(person);

console.log(`${person.firstName} ${person.lastName} is ${person.age} years of age`);

function otherHobbies (person) {
    console.log(`His hobbies are: ${person.hobbies[3]},${person.hobbies[4]},${person.hobbies[5]}`);
}
otherHobbies(person);

function address (city, houseNumber, state, street) {
    console.log(`city: ${city}`);
    console.log(`house Number: ${houseNumber}`);
    console.log(`state: ${state}`);
    console.log(`street: ${street}`);
}
address(city, houseNumber, state, street);

let isMarried = false;
function checkStatus (isMarried) {
    isMarried = true;
    console.log(`The value of isMarried is:`);
    console.log(isMarried);
}
checkStatus(isMarried);