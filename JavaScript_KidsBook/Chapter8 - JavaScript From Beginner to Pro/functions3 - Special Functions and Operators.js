//0. test
var ping = "Jessica, we are live";
console.log(ping + "!!!");

//Traditional Function Syntax:
//1. Parameters | Arguments:
/* 	function tester(para1, para2){
		return para1 + " " + para2;
		}
		const arg1 = "argument 1";
		const arg2 = "argument 2";
	tester(arg1, arg2);

	//Sum
	function addNumbers(x = 2, y = 3) {
		console.log(`Sum of x = 2 + y = 3: ${x + y}`);
		}
	addNumbers(); */

	
//1. Arrow Functions
console.log(`Arrow functions are great for sending functions around as parameters and using shorter notations`);

//1.1. SYNTAX:
//No parameters: () => body of the function;
//One parameter (no parentheses are needed here): param => body of the function;
//With muliple parameters: (param1, param2) => body of the function;
// multiline function with two parameters:(param1, param2) => {// line 1; // any number of lines; };

//Traditional
function doingStuff(x) {
	console.log(x);
	}
	doingStuff("Great");

//Arrow: No parameters:
let sayHi = () => console.log("no parameter for this function.");
sayHi();

//Arrow: //One parameter (no parentheses are needed here): param => body of the function;
let doingArrowStuff = x => console.log(x);
doingArrowStuff("Awesome");

//Arrow - With muliple parameters: (param1, param2) => body of the function;
let addTwoNumbers = (x, y) => console.log(x + y);
addTwoNumbers(5, 3);
//
const arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));
//
const arrs = ["squirrel", "alpaca", "buddy"];
arrs.forEach(e => console.log(`happy ${e}`));
//
const calc = [2, 4, 6, 8, 10];
calc.forEach(e => console.log(`happy ${e *= 3}`));
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

//2. Spread and Rest
console.log(`
The spread and rest operators are more flexible when sending arguments and working with arrays.
The spread operator is a special operator. It consists of three dots used before a
referenced expression or string, and it spreads out the arguments or elements of an array.`
);

//EXAMPLE: Arrays
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];
console.log(`Spread: ${message}`);

//EXAMPLE2: Arguments
function addition(x, y, z) {
	console.log(x + y + z);
	}
	var arr1 = [5, 9, 13];
	//Same as addTwoNumbers(5, 9);
	addition(...arr1);
//
/* var sum = function addition(x, y, z) {
	console.log(x + y + z);
	}
	var arr1 = [5, 9, 13];
	addition(...arr1);
	console.log(`Sum: ${sum}`); */

//EXAMPLE3: Calling multiple Spread
function addFourNumbers(x, y, z, a) {
	console.log(`Sum of x + y + z + a: ${x + y + z + a}`);
	}
	var arr1 = [5, 9];
	var arr2 = [6, 7];
	addFourNumbers(...arr1, ...arr2);
	//Same as addFourNumbers(5, 9, 6, 7);
	addFourNumbers(5, 9, 6, 7);

//3. Rest Parameter:
console.log(`
Rest parameter has the same symbol as the spread operator.
It is used inside the function parameter list. 
rest parameter allows us to send in any number of arguments and translate 
them into a parameter array:`)

//Example 3.1:
//Problem: Function takes 2 parameters, more are supplied - will take first 2 and move on:
function someFunction(param1, param2) {
	console.log(param1, param2);
	}
	someFunction("Hey", "there!", "How are you?"); //Hey there

//SOLUTION: Using Rest Parameter
function restParam(param1, ...param2) {
	console.log(param1, param2);
	}
	restParam("Hiya", "there!", "How are you?"); //Hiya ["there!", "How are you?"]

//MyExample:


//Returning function values
//storing the result of our prompt() function in the variable

/* 
let favoriteSubject = prompt("What is your favorite subject?");
console.log(`My favorite subject is ${favoriteSubject}.`); 
*/

//store the result of our addTwoNumbers() function and log that variable:
function bodmas(x,y) {
	console.log(x + y);
	}
	bodmas(4,5);

//
let result = bodmas(4, 5);
console.log(result); //Undefine if no return
console.log(`Sum = ${result}.`);
result;

//With return:
console.log(`
return ends the function and sends back whatever value comes after return. If it is
an expression, it evaluates the expression to one result and then return that to where
it was called (the result variable, in this instance):
`);

function addNums(x, y) {
	return x + y;
	}

	let sum = addNums(4,5);
	console.log(`x(4) + y(5)= ${sum}`);

//The first iteration: i = 0 = 0 + (2*0)= 0. The last iteration, i, equals 9, i = 9 + (2*9)= 27 :
let resultsArr = [];
for(let i = 0; i < 10; i ++){
let result = addNums(i, 2*i);
resultsArr.push(result);
}
console.log(resultsArr); //[0, 3, 6, 9, 12,	15, 18, 21, 24, 27]
console.log(`Length of resultsArr: ${resultsArr.length}`);
console.log(`First element of resultsArr: ${resultsArr[0]}`);
console.log(`nth element of resultsArr: ${resultsArr.length - 1}`);
















