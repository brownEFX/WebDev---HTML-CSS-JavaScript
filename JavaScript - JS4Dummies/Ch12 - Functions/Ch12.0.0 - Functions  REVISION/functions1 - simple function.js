//1. Creating a Simple Function:
var simpleFunction = function() {
	console.log(`A function bundles code so that it can be reused from multiple places in a program without 
	having to copy and paste the code repeatedly. This note is printed when the variable is called.`)}

	simpleFunction();

//A new function and saves it in the variable ourFirstFunction.
var firstFunction = function () {
	console.log("Log ==> Hello world!");
	};
	
	firstFunction(); //Calling a Function - /Enter functionName followed by ();

//A new function and saves it in the variable ourFirstFunction.
var secondFunction = function () {
	alert("Alert: Return ==> Hello world!");
	};

	secondFunction(); //Calling a Function - /Enter functionName followed by ();
//Single Parameter:
function double(number) {
	console.log(`Number * 2 = ${number * 2}`);
}
console.log(`double(10): ${double(10)}`);

//Multiple Parameters
var sayHelloTo = function (name, age) {
	console.log(`Hello, my name is ${name}. I am ${age} years old`);
	};

	sayHelloTo("Joe Black", 35);

var thirdFunction = function () {
	return ("Return ==> Hello world!");
	};
	
	console.log(`${thirdFunction()}`); //Calling a Function - /Enter functionName followed by ();
	//Return Value: is the value that a function outputs, which can then be used elsewhere in your code.

//Return
function double(number) {
	return number * 2;
}
console.log(`double(10): ${double(10)}`);

let input = 9;
let answer = double(input);
console.log(`Double ${input} = ${answer}`);

//
var sayHelloTo = function (name, age) {
	console.log(`Hello, my name is ${name}. I am ${age} years old`);
	};

	sayHelloTo("Joe Black", 35);