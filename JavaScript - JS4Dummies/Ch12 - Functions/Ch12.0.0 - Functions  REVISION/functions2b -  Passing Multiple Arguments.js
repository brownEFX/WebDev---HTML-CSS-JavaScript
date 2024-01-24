//1. Passing Multiple Arguments to a Function
/*
Syntax for creating a function with two arguments: 

	function (argument1, argument2) {
		console.log("My first argument was: " + argument1);
		console.log("My second argument was: " + argument2);
	}
*/
//EXAMPLE1:
var printMultipleTimes = function (howManyTimes, whatToDraw) {
	for (var i = 0; i < howManyTimes; i++) {
	console.log(i + " " + whatToDraw);
	}
};

printMultipleTimes(5, "=^.^="); //OR 

printMultipleTimes(6, ":-) | ^_^ | :-( | ()>_<() | (~'o')~)");

printMultipleTimes(4, "(-)");

//EXAMPLE2:
var sqrRoot = function (num) {
	for (var i = 1; i < 100.0; i++) {
		sqrRoot = Math.sqrt(num);
	console.log("The square Root of " + num + " is " + sqrRoot);
	}
};

sqrRoot(100);


//EXAMPLE3
var sayHelloTo = function (name, age) {
	console.log(`Hello, my name is ${name}. I am ${age} years old`);
	};

	sayHelloTo("Joe Black", 33);