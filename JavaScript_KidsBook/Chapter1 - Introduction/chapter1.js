//0. test
console.log("test");

var ping = "Jessica, we are live";
console.log(ping + "!!!");


//Greetings
var greetings = "Hello, world";
console.log(greetings + "!!!");
console.log(`${greetings}!!!`);

// console.log(3+23);
// Draw as many cats as you want!
var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
    }
};
drawCats(10); // You can put any number here instead of 10.

//Template Literals:
const fullName = 'John Doe';
const age = 20;

// Using template literals for string interpolation
console.log(`My name is ${fullName} and I'm ${age} years old.`);