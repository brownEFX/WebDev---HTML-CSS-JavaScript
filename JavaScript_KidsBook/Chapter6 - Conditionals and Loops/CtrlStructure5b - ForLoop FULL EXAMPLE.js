//2. For Loop
/*
for loops make it easier to write loops that create a variable, loop
until a condition is true, and update the variable at the end of
each turn around the loop. When setting up a for loop, you create
a variable, specify the condition, and say how the variable should
change after each cycle—all before you reach the body of the loop.

		for (setup(variable); condition; increment) {
		console.log("Do something");
		}

The setup (var sheepCounted = 0) is run before the loop starts.

The condition (sheepCounted < 10) is checked before each run of the loop body.
If the condition is true, the body is executed; if it’s false, the loop stops.

The increment (sheepCounted++) is run after every execution of
the loop body. It’s generally used to update the looping variable.
*/

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("Zzzzzzzzzzz");

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
	console.log("I have counted " + sheepCounted + " sheep!");
	}
	console.log("Zzzzzzzzzzz");

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
	console.log("Hello!");
	}

//do something with every element in an array
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

console.log(animals);

console.log(animals.length);

for (var i = 0; i < animals.length; i++) {
	console.log("This zoo contains a " + animals[i] + ".");
	}
	
//access individual characters in a string:
var name = "Nick";
	for (var i = 0; i < name.length; i++) {
	console.log("My name contains the letter " + name[i] + ".");
	}

//Powers of 2 under 10000
for (var x = 2; x < 10000; x = x * 2) {
	console.log(x);
	}

//Powers of 3 under 10000
for (var x = 3; x < 10000; x = x * 3) {
	console.log(x);
	}


//MyExample2: print fibonacci series using for loop
var count = 7, num1 = 0, num2 = 1;
console.log("Fibonacci Series of "+count+" numbers:");

for (var i = 1; i <= count; ++i)
{
    console.log(num1+" ");

    /* On each iteration, we are assigning second number
     * to the first number and assigning the sum of last two
     * numbers to the second number
     */
    var sumOfPrevTwo = num1 + num2;
    num1 = num2;
    num2 = sumOfPrevTwo;
}