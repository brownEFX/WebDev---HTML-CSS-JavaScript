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

//Fibonacci Series
function fibonacci(n) {
    let a =  0;
    let b = 1;

    if (n === 0) {
        return a;
    }

    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;

    }

    return b;
}
console.log(fibonacci(20));

//Fibonaccie Series:
N = 10;
var a = 1;
var b =  1;
var c;

document.write(a  + '</br>' + b + '</br>');

for (var i = 0; i < N - 2; i++) {
    c = a + b;
    a =  b;
    b = c; 

    document.write(c + '</b>')
}




//do something with every element in an array
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

console.log(animals);

console.log(animals.length);

for (var i = 0; i < animals.length; i++) {
	console.log("This zoo contains a " + animals[i] + ".");
	}