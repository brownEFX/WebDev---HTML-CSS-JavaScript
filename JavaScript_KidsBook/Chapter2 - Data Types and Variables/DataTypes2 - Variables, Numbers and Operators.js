//0. test
    console.log("Test: The ayes have it, the ayes have it");

    var ping = "Jessica, we are live";
    console.log(ping + "!!!");
    
//1. Addition:
    //Sum of 2 numbers:
    console.log("12345 + 56789 = " + 12345 + 56789);

    //Sum of 3 numbers:
    console.log("22 + 33 + 44 = " + 22 + 33 + 44);

//2. Subtraction:
    // Difference of 2 numbers:
    console.log("100 - 17 = " + (100 - 17));

//3. Multiplication:
    // Product of 2 numbers:
    console.log("123 * 456 = " + 123 * 456);  

    console.log("Multiplication: " + 99 * 123);

//4. Division
    //Quotient of 2 numbers:
    console.log("12345 / 250 = " + 12345 / 250);

//5. BODMAS:
    console.log("1234 + 57 * 3 - 31 / 4 = ");
    console.log( 1234 + 57 * 3 - 31 / 4);
    var a = 31 / 4
    console.log("31 / 4 = " + a);
    var b = 57 * 3
    console.log("57 * 3 = " + b);
    var c = 1234 + b;
    console.log("1234 + (57 * 3) = " + c);
    var d = c - a;
    console.log("(1234 + (57 * 3)) - (31/4) = " + d);

//6. Exponent **:
console.log("Exponent **: ");
console.log("2 ** 2: " + 2 ** 2); //Expected output: 4
console.log("2 ** 0: " + 2 ** 0); //Expected output: 2
console.log("2 ** 1: " + 2 ** 1); //Expected output: 0.01
console.log("2 ** -2: " + 2 ** -2); //x ** -y: == 1/y*y, Expected output: 0.25
console.log("10 ** -2: " + 10 ** -2); //Expected output: 1/10*10 = 1/100 | 0.01
console.log("10 ** -3: " + 10 ** -3); //Expected output: 1/10*10*10 = 1/1000 | 0.001

//7. Modulus % :
console.log("Modulus %: ");
var x = 17;
console.log("x = " + x); //13
y = x % 5;
console.log("x = x % 5 " + y); //2
z = x % 3;
console.log("x = x % 5 " + z); //2

var x = 13;
console.log("x = " + x); //13
x %= 5;
console.log("x %= 5 " + x); //3

//console.log("This is a long string".slice(0, 4));

//Split 8 candies among 4 sibling:
console.log(8/(1+3));

var candies = 8;
var brothers = 1;
var sisters = 3;
var siblings = brothers + sisters;
console.log("Candies per sibling: " + candies/siblings);
console.log(`Candies per sibling - Template Literals: ${candies/siblings}`);


//Number of balloons 1
console.log((15+9) * 2);

var invites = 15 + 9;
var balloons = invites * 2;
console.log("Number of balloons to buy: " + balloons);

//Variables: Number of balloons 2
var numberOfSiblings = 1 + 3;
console.log("Number of siblings:" + numberOfSiblings);
var numberOfCandies = 8;
console.log("Number of candies:" + numberOfCandies);
var candiesPerSibling = numberOfCandies / numberOfSiblings;
console.log("Candies per sibling: " + candiesPerSibling);










