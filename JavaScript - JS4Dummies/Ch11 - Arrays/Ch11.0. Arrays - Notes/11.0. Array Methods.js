//1. Creating an Array
//Empty Array:
var faveFoods = [];

//Array with data
var favouriteFoods = ["broccoli", "eggplant", "tacos", "mushrooms"]

//Storing Different Data Types: numbers, strings, Boolean values, and objects.
var myArray = [5, "Hi there", true];

//Getting Array values:
myArray[0]; //5
myArray[1]; //Hi there

//Using variables inside an Array:
var firstName = "Karabo";
var middleName = "Emmanuel";
var lastName = "Tabane";
var developer = [firstName, middleName, lastName];
console.log(`My name is ${developer.join(" ")}. I am a web developer`); 

var webDev = developer.join(" ");
console.log(`My name is ${webDev}. I am a web developer`); 