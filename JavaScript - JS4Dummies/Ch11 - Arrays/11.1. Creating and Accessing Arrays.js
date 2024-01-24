//1. Creating an Array
//Empty Array:
var faveFoods = [];

//document.getElementById("emptyArray").innerHTML = faveFoods.valueOf(); 

//Add Elements:
faveFoods[0] = "Kale";
faveFoods[1] = "Avocado";
faveFoods[2] = "Tuna";
faveFoods[3] = "Chicken";

//document.getElementById("dataArray").innerHTML = faveFoods.valueOf(); 
//document.getElementById("peopleIKnow").innerHTML = people.valueOf();

document.getElementById("dataArray").innerHTML = faveFoods.toString();


//Array with data
var favouriteFoods = ["broccoli", "eggplant", "tacos", "mushrooms"]

document.getElementById("arrayWithData").innerHTML = favouriteFoods.valueOf(); 

//2. Storing Different Data Types: numbers, strings, Boolean values, and objects.
var myArray = [5, "Hi there", true];

document.getElementById("differentDataTypes").innerHTML = myArray.valueOf(); 


//3. Getting Array values:
myArray[0]; //5
myArray[1]; //Hi there

document.getElementById("arrayValues").innerHTML = myArray[1].valueOf(); 


//4. Using variables inside an Array:
var title = "Mr.";
var firstName = "Karabo";
var middleName = "Brown";
var lastName = "Tabane";
var developer = [title, firstName, middleName, lastName];
console.log(`My name is ${developer.join(" ")}. I am a web developer`); 

document.getElementById("arrayVariables").innerHTML = developer.join(" ").valueOf(); 

//var webDev = developer.join(" ");
var webDev = (`My name is ${developer.join(" ")}. I am a web developer.`); 

document.getElementById("arrVarJoin").innerHTML = webDev.valueOf(); 

