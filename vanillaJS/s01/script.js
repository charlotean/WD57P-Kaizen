console.Log("connected")


const pi = 3.14;
// pi = 2.000;
console.log (pi);

let name1 = "Boriz";
console.log (name1);

name1 = "Richard";
console.log (name1);

let name = "Joel";
name = 'Tonet' ;
name = 'Kokou' ;
console.log (name);

let age = 15;
console.log (age);
console.log (typeof age);

let grade = 90.5;
console.log (grade);

let myCopy;
console.log (myCopy);

let option1 = null;
console.log(option1);

let $year = 2023;
console.log($year);

let $_year = 2023;
console.log($_year);

let __year = 2023;
console.log(__year);

let person = {
    name: "Jose Rizal",
    age: 30,
    address: "Calamba, Laguna",
    isDoctor:true,
    spouse: null,
    siblings: [
        "Paciano",
        "Maria",
        "Olympia",
        "Saturnina",
        "Josefa",
        "Narsisa",
        "Lucia",
        "Soledad",
        "Concepcion",
        "Trinidad",
    ]
}

console.log(person);
console.log(person.name);
console.log(person.address);
console.log(person.siblings);

let fruits =  ["Apple", "Pear", "Guava", "Aratilis", "Grapes"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[2]);
console.log(fruits[4]);

function greeting (firstName, lastName) {
    console.log(`My name is ${firstName} ${lastName}. It was nice to meet you!`);
}
greeting ("Annie", "Batungbakal");
greeting ("Rey", "Toro");
function product (a, b) {
    console.log("Product: ");
    return (a * b);
}
console.log(product(2,4));