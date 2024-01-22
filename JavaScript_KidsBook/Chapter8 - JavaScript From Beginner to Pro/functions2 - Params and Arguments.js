console.log(`FUNCTIONS`);

//1. Parameters | Arguments:
function tester(para1, para2){
	return para1 + " " + para2;
	}
	const arg1 = "argument 1";
	const arg2 = "argument 2";
	tester(arg1, arg2);

function tester(para1, para2){
	return para1 + " " + para2;
	}
	const para1 = "argument 1";
	const para2 = "argument 2";
	tester(para1, para2);

//Sum
function addNumbers(x = 2, y = 3) {
	console.log(`Sum of x = 2 + y = 3: ${x + y}`);
	}
addNumbers();

addNumbers(3,4);
//
function multiply(x = 2, y = 3) {
	console.log(`Sum of (x = 2) * (y = 3): ${x * y}`);
	}
addNumbers();
//
function power(x = 2, y = 3) {
	console.log(`x to the Power y: ${x ** y}`);
	}
power();
//
var a = 3;
var b = a ** 2;
console.log(`b = a ^ 2: ${a ** 2}`);
//
var a;
var b;
var exponents = (a, b) => (`a ^ b: ${a ** b}`);
console.log(`x to the Power y: ${exponents(3,6)}`);
console.log(`x to the Power y: ${exponents(8,8)}`);
exponents(8,8);

//
function addTwoNumbers(x, y) {
	return x + y;
	//console.log(`Sum of x + y = ${x + y}`);
	}
	addTwoNumbers(2,4)
//
//Sum
function sum(x, y) {
	console.log(`Sum of x + y = ${x + y}`);
	}
	sum(2,4)
//	
function product(x, y) {
	console.log(`Product of x * y = ${x * y}`);
	}
	product(2,4);

function difference(x, y) {
	console.log(`Product of x - y = ${x - y}`);
	}
	difference(28,14);

function qoutient(x, y) {
	console.log(`Quotient of x / y = ${x / y}`);
	}
	qoutient(125,5);

function modulus(x, y) {
	console.log(`Modulus of x % y = ${x % y}`);
	}
	difference(129,5);

	//
	var mix = addTwoNumbers(2,4) + product(2,4);
	//freconsole.log(`addTwoNumbers(2,4) + product(2,4) = ${addTwoNumbers(2,4) + product(2,4)}`);
	console.log(`addTwoNumbers(2,4) + product(2,4) = ${mix}`);

//ttconsole.log("Hi, there! x + y = ",  addTwoNumbers(2,4));

//Practice exercise 6.2
var descriptive = ["fantastic", "fabulous", "brilliant", "awesome", "horrid", "impeccable"];

/*
var yourAlias = function (you){
	var you = prompt("What is your name? ");
	console.log("Hi, there!",  you);
}
yourAlias();
*/
//random index:
console.log(descriptive[Math.floor(Math.random() * descriptive.length)]);

//console.log("Hi, there!", you);


//Array
var myWords = ["glib", "pithy", "blithe", "testy", "fib", "foible"];

	//Define a pickRandomWord function.
	var pickRandomWord = function (myWords) {
		return myWords[Math.floor(Math.random() * myWords.length)];
	};
	console.log(`RandomWord: ${pickRandomWord(myWords)}`);

	var pickRandomIndex = function (myWords) {
		return [Math.floor(Math.random() * myWords.length)];
		//return(pickRandomWord)
		};
		console.log(`RandomIndex: ${pickRandomIndex(myWords)}`);

		console.log(`Index of RandomWord: ${myWords.indexOf(pickRandomWord(myWords))}`); //myWords.indexOf('red', 4));
