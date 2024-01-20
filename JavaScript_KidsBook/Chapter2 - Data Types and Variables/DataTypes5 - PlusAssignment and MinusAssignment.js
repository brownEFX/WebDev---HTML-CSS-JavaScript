//0. test
    console.log("Test: The ayes have it, the ayes have it");

    var ping = "Jessica, we are live";
    console.log(ping + "!!!");

//1. Addition-assignment:  +=
console.log("Plus-assignment += : ");
var x = 10;
console.log("x = " + x); //10
console.log(`x: ${x}`);
x = x + 5;
console.log("x = x + 5 " + x); //15
console.log(`x = x + 5: ${x}`);

var x = 10;
console.log("x = " + x); //10
x += 5;
console.log("x += 5 " + x); //15
console.log(`x += 5: ${x}`);

//2. Minus-assignment:  -=
console.log("Minus-assignment -= : ");
var x = 10;
console.log("x = " + x); //10
x = x - 5;
console.log("x = x + 5 " + x); //5

var x = 10;
console.log("x = " + x); //10
x -= 5;
console.log("x -= 5 " + x); //5

var score = 10;
score += 7; //17
score -= 3; //14

//3. Multiplication-assignment:  *=
console.log("Multiplication-assignment *= : ");
var x = 10;
console.log("x = " + x); //10
x = x * 5;
console.log("x = x * 5 " + x); //50

var x = 10;
console.log("x = " + x); //10
x *= 5;
console.log("x *= 5 " + x); //50

//
var balloons = 100;
balloons *= 2;
console.log(balloons);
console.log("balloons *= 2: " + balloons);

//4. Divide-assignment:  /=
console.log("Divide-assignment /= : ");
var x = 10;
console.log("x = " + x); //10
x = x / 5;
console.log("x = x / 5 " + x); //2

var x = 10;
console.log("x = " + x); //10
x /= 5;
console.log("x /= 5 " + x); //2

var balloons = 100;
balloons /= 4;
console.log(balloons);
console.log("balloons /= 4: " + balloons);

//5. Modulus-assignment:  %=
console.log("Modulus-assignment %= : ");
var x = 13;
console.log("x = " + x); //13
x = x % 5;
console.log("x = x / 5 " + x); //3

var x = 13;
console.log("x = " + x); //13
x %= 5;
console.log("x %= 5 " + x); //3

//5. Exponent-assignment:  **=
console.log("Exponent-assignment **= : ");
console.log("2 ** 2: " + 2 ** 2); //Expected output: 4
console.log("2 ** 0: " + 2 ** 0); //Expected output: 2
console.log("2 ** 1: " + 2 ** 1); //Expected output: 0.01
console.log("2 ** -2: " + 2 ** -2); //x ** -y: == 1/y*y, Expected output: 0.25
console.log("10 ** -2: " + 10 ** -2); //Expected output: 1/10*10 = 1/100 | 0.01
console.log("10 ** -3: " + 10 ** -3); //Expected output: 1/10*10*10 = 1/1000 | 0.001

var x = 2;
console.log("x = " + x); //2
x = x ** 2;
console.log("x ** 2 = " + x); //4

var x = 2;
console.log("x = " + x); //2
x **= 2;
console.log("x **= 2: " + x); //4

var highFives = 0;
console.log("++highFives = " + ++highFives); //Returns 1
console.log("++highFives = " + ++highFives); //Returns 2
console.log("highFives++ = " + highFives++); //Returns 2 - highFives is incremented by 1 but value before incrementing is returned
console.log("highFives = " + highFives); //Returns 3

//2. Decrementing
var highFives = 3;
console.log("--highFives = " + --highFives); //Returns 2
console.log("--highFives = " + --highFives); //Returns 1
console.log("highFives-- = " + highFives--); //Returns 1 - highFives is decremented by 1 but value before decrementing is returned
console.log("highFives = " + highFives); //Returns 0












