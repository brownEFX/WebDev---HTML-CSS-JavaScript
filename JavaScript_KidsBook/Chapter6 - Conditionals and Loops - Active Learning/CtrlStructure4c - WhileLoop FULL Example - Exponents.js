//WhileLoop - Exponents

//MyExample3 - 𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(x,y) = x^y
var x = 10;
var y = 10;
console.log(Math.pow(x,y));

//myExample - Power of Two
// read in one command-line argument
var n = 8; //var n = Integer.parseInt(args[0]);
var i = 0; // count from 0 to N
var powerOfTwo = 1; // the ith power of two

    // repeat until i equals n
    console.log("Powers of 2:");
    while (i <= n) {
        console.log("2 to the " + i + " power is " + powerOfTwo);   // print out the power of two
        powerOfTwo = 2 * powerOfTwo; // double to get the next one | powerOfTwo *= 2
        i = i + 1;
    }

//myExample - Power of Three
// read in one command-line argument
var n = 10; //var n = Integer.parseInt(args[0]);
var i = 0; // count from 0 to N
var powerOfThree = 1; // the ith power of two

    // repeat until i equals n
    console.log("Powers of 3:");
    while (i <= n) {
        console.log("3 to the " + i + " power is " + powerOfThree);   // print out the power of two
        powerOfThree = 3 * powerOfThree; // tripple to get the next one | powerOfTwo *= 2
        i = i + 1;
    }

    //MyExample3 - Integer Powers of 2
var e;
var result;

    for (var i = 0; i <= 10; i++) {
        result = 1;
        e = i;
        while (e > 0) {
            result *= 2;
            e--;
        }
    console.log("2 to the " + i + " power is " + result);
    }

//myExample:
var base = 10
var exponent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomExponent = Math.floor(Math.random() * exponent.length);
console.log("Random index of exponent is " + randomExponent);
console.log("Element is " + exponent[randomExponent]);

//𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(x,y) = x^y
console.log(Math.pow(7,8));

//𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(x,y) = x^y
console.log(base + " to the power " + exponent[randomExponent] + " = " + (Math.pow(base,exponent[randomExponent])));

//myExample - Balance

//MyExample3 - Integer Powers of 2
var e;
var result;

    for (var i = 0; i <= 2; i++) {
        result = 1;
        e = i;
        while (e > 0) {
            //console.log(result *= 2);
            result *= 2;
            e--;
        }
    console.log("2 to the " + i + " power is " + result);
    }

//myExample
/* power >= 10 exceed the limit of Integer.MAX_VALUE
 * int MAX_VALUE is a constant holding the maximum value an int can have, 2^31-1
 * If this limit is overflown then your number will be equal to Integer.MIN_VALUE+theRestOfTheNumber
 * The calculation will be going on with this number.
 */

//int power = 1; //10^10 = 1410065408 because of Integer.MAX_VALUE limit

var myBase = prompt("Please enter base:");
var myExponent = prompt("Please enter exponent:");
var myPower = 1;

while(myExponent <= 10) {
    myPower *= myBase;
    myExponent--;
    //exponent++;
    console.log("Base: " + myBase + ", Exponent: " + myExponent + ". Therefore, Power = " + myPower);
}

/*        while(exponent > 0 && exponent < 30) {
    power *= base;
    exponent++;
    System.out.println("Power = " + power);
}*/