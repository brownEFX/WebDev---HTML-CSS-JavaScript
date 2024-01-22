console.log(`FUNCTIONS`);

//1. invoking functions:

function addNums(x, y, z) {
	return x + y + z;
	}

	addNums(4,5);
	//console.log(`x(4) + y(5)= ${sum}`);

//2. Writing Functions

function nameOfTheFunction() {
	//content of the function
	console.log(`Hello, there.`);
	}

//nameOfTheFunction();

//
function sayHello() {
	let you = prompt("What's your name? ");
	console.log(`Hello, ${you}.`);
	};

	sayHello();


//example of a variable containing a function (varContainingFunction) and a variable inside a function (varInFunction):
let varContainingFunction = function() {
	let varInFunction = "I'm in a function.";
	console.log("Hi, there!", varInFunction);
	};
	varContainingFunction();

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

//Practice exercise 6.2
var descriptive = ["fantastic", "fabulous", "brilliant", "awesome", "horrid", "impeccable"];

var yourAlias = function (you){
	var you = prompt("What is your name? ");
	var description = descriptive[Math.floor(Math.random() * descriptive.length)]
	console.log(`${you}, ${description}.`);
}
yourAlias();

//random index:
console.log(`This Random descriptive: ${descriptive[Math.floor(Math.random() * descriptive.length)]}`);

//console.log("Hi, there!", you);


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

		
