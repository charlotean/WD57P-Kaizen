console.log("Hello World!");

let person = {
    firstName: "John",
    lastName: "Smith",
    age: 30,
    hobbies: [
        "Biking",
        "Mountain Climbing",
        "Swimming"
    ]
}
console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Hobbies: ${person.hobbies[0]}, ${person.hobbies[1]}, ${person.hobbies[2]}`);
console.log("Work Address:");

const city = 'Lincoln'
const houseNumber = 32;
const state = 'Nebraska';
const street = 'Washington';
function userInformation (age) {
    console.log(`John Smith is ${age} years of age`);
}
function userInformation (hobbies) {
    console.log(`John Smith likes ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}`);
}
//function userInformation