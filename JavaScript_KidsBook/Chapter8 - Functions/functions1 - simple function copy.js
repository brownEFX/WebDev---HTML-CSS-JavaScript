//Return
function double(number) {
	return number * 2;
}
console.log(double(10));

let answer = double(9);
console.log(`Double ${number} = ${answer}`);

//Return
function double(number) {
	return number * 2;
}
console.log(`double(10): ${double(10)}`);

console.log(double(3)); //6
//
let input = 9;
answer = double(input);
console.log(`Double ${input} = ${answer}`);

//
var sayHelloTo = function (name, age) {
	console.log(`Hello, my name is ${name}. I am ${age} years old`);
	};

	sayHelloTo("Joe Black", 35);

//SquareRoot
	//var sqrRoot = function (num) {
	for (var i = 1; i < 100.0; i++) {
		sqrRoot = Math.sqrt(num);
	console.log("The square Root of " + num + " is " + sqrRoot);
	};

	sqrRoot(100);

	var double = function (number) {
		//To return a value from a function, use the keyword return with the value you want to return
		return number * 2; //
		};
		
		//call our double function to double numbers:
		console.log(double(3)); //6
	
		console.log(double(4)); //8
	
		//Pass a function call into another function as an argument, and the function call will be substituted with its return value
		double(double(3)); //12
	
	//EXAMPLE2:
	var sqrRoot = function (num) {
		for (var i = 1; i < 100.0; i++) {
		return	sqrRoot = Math.sqrt(num);
		}
	};
	//console.log("The square Root of " + num + " is " + sqrRoot);
	
	console.log(sqrRoot(49));
//EXAMPLE3
var sayHelloTo = function (name, age) {
	console.log(`Hello, my name is ${name}. I am ${age} years old`);
	};

	sayHelloTo("Joe Black", 33);

//4. Function Calls as Values:
var double = function (number) {
	return number * 2;
	};

	console.log(`double(3): ${double(3)}`);
	console.log(`double(8): ${double(8)}`);
	console.log(`double(5) + double(6): ${double(5) + double(6)}`);
	console.log(`double(double(3)): ${double(double(3))}`);