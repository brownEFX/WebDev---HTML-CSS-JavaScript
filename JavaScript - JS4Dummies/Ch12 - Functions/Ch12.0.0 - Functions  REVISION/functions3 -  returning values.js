//1. Returning Values from Functions
//save a return value in a variable, pass it to another function, or simply combine it with other code).
//Functions can take multiple arguments, but can return only one value. 
//If you don’t tell the function to return anything, it will return undefined.

//EXAMPLE1:

5 + Math.floor(1.2345); //6

//EXAMPLE2: a function that returns a value
	
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

//console.log("The square Root of " + num + " is " + sqrRoot);

//console.log(Math.floor(1.8999))
