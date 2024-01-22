console.log(`FUNCTIONS`);





/*

//1. BASIC function - console.log
function function1() {
		1 + 1
	}

	function1();
	//console.log(nameOfTheFunction());
//
function function2() {
	console.log(`Sum of 1 + 1 = ${1 + 1}`)
	}

	function2();
	//console.log(nameOfTheFunction());

//
function function2() {
	return 1 + 1
	}

	function2();
	//console.log(nameOfTheFunction());

function function3() {
	//content of the function
	//return (`Hey! Hello, there.`);
	return 1 + 1;
	//console.log(`Logged ==> Hey! Hello, there.`);
	}

	console.log(function3());
	//console.log(nameOfTheFunction());
//

function sayHello() {
	let you = prompt("What's your name? ");
	console.log("Hello", you + "!");
	}

	sayHello();
//
function aFunction() {
	//content of the function
	return (`Returned ==> Hey! Hello, there.`);
	//console.log(`Hey! Hello, there.`);
	}

	aFunction();
	console.log(aFunction());



//2. FUNCTION in a Variable:
// Example1
let varContainingFunction = function() {
	let varInFunction = "I'm a variable in a function.";
	console.log("hi there!", varInFunction);
	};
	varContainingFunction();
	//console.log(varContainingFunction());

// Example1
let funcVar = function() {
	let varInFunc = "I'm a variable in a function.";
	console.log("hi there!", varInFunc);
	};
	funcVar();
	//console.log(varContainingFunction());

//1. Example1:

var addition = function addNums(x, y, z) {
	var output = x + y + z;
	return output;
	}

	addition(4,5,7);
	console.log(`x(4) + y(5) + z(7) = ${addition(4,5,7)}`);
	console.log(`x(4) + y(5) + y(5) = ${addition}`);

//1. Example1:

function multiply(x, y, z) {
	console.log(`x(4) + y(5) + y(5) = ${x * y * z}`); 
	}

	multiply(4,5,7);
	//console.log(`x(4) + y(5)= ${sum}`);

//Practice exercise 6.1: 
//Create a function that takes two parameters, adds the parameters together, and returns the result.
let sum = function(x,y) {
	var x;
	var y;
	let sum = x + y;
	console.log(`Sum of ${x} and ${y} = ${sum}`);
	};
	sum(11,21);
	sum(3,6);

	//Set up two different variables with two different values
	var i = 12;
	var j = 13;
	console.log(`Sum of ${i} and ${j} = ${sum}`);
	sum(i,j);

		//Set up two different variables with two different values
		var i;
		var j;
		console.log(`Sum of ${i} and ${j} = ${sum}`);
		sum(23,24);


//1. Create an array of descriptive words.
var myAdjectives = ["glib", "pithy", "blithe", "impeccable", "fantastic", "splendid"];
console.log(`myAdjectives.length: ${myAdjectives.length}`)
console.log(`${myAdjectives[Math.floor(Math.random() * myAdjectives.length)]};`)

//2. Create a function that contains a prompt asking the user for a name.
var clientName = function (you){
	var yourName = prompt("What is your name? ");
	//3. Select a random value from the array using Math.random.
	var randomAdj = myAdjectives[Math.floor(Math.random() * myAdjectives.length)]
	//4.reOutput into the console the prompt value and the randomly selected array value.
	console.log(`${yourName}, ${randomAdj}.`);
}
//5. Invoke the function.
clientName();



var yourName = prompt("What is your name? ");

//3. Select a random value from the array using Math.random.
	//Define a pickRandomWord function.
	var pickRandomWord = function (myAdjectives) {
		return myAdjectives[Math.floor(Math.random() * myAdjectives.length)];
		//console.log(`${yourName}, ${myAdjectives[Math.floor(Math.random() * myAdjectives.length)]}`)
	};
	console.log(`RandomWord: ${pickRandomWord(myAdjectives)}`);
	pickRandomWord(yourName, myAdjectives);

	var pickRandomIndex = function (myAdjectives) {
		return [Math.floor(Math.random() * myAdjectives.length)];
		//return(pickRandomWord)
		};
		console.log(`RandomIndex: ${pickRandomIndex(myAdjectives)}`);

		console.log(`Index of RandomWord: ${myAdjectives.indexOf(pickRandomWord(myAdjectives))}`); //myWords.indexOf('red', 4));

		
*/