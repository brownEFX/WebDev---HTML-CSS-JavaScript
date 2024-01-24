//1. Passing Arguments into Functions
/*
Function arguments allow us to pass values into a function in order to change its behavior when it’s called. 
Arguments always go between the function parentheses, both when you create the function and when you call it.
Syntax for a function with one argument:

	function ( argument ) {
		console.log("My argument was: " + argument);
	}
*/

//EXAMPLE1:
	var sayHelloTo = function (name) {
		console.log("Hello, " + name + ". How do you do?");
		};
		
		sayHelloTo("Joe Black");

		sayHelloTo("Joe Soap");

//EXAMPLE2
var sayHelloTo = function (name, age) {
	console.log(`Hello, my name is ${name}. I am ${age} years old`);
	};

	sayHelloTo("Joe Black", 35);

//EXAMPLE2:	
		var drawCats = function (howManyTimes) {
			for (var i = 0; i < howManyTimes; i++) {
			console.log(i + " =^.^=");
			}
		};
		
		//Call the function:
		drawCats(4);

//EXAMPLE3: 
	var sayHello = function (friendName) {
		var timesToSayHello = 3;
		for (var i = 0; i < timesToSayHello; i++) {
			console.log("Hello, " + friendName + ". Howzit?");
			}
		}
		sayHello("Friend");
		

//EXAMPLE4:	
	var smileyFaces = function (howManyTimes) {
		for (var i = 0; i < howManyTimes; i++) {
		console.log(i + " :-) =^.^= )-:");
		}
	};
	
	//Call the function:
	smileyFaces(3);

//EXAMPLE5:	
	var countRecords = function (howManyRecords) {
		for (var i = 0; i < howManyRecords; i++) {
		console.log("i = " + i); //I prints the value specified when you call a variable
		//console.log("howManyRecords = " + howManyRecords); //(i + howManyRecords)
		//console.log("i + howManyRecords = " + (i + howManyRecords)); //(i + howManyRecords)
		}
	};
	
	//Call the function:
	countRecords(6);
