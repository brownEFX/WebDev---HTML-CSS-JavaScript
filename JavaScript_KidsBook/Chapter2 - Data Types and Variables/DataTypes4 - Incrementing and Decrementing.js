//0. test
    console.log("Test: The ayes have it, the ayes have it");

    var ping = "Jessica, we are live";
    console.log(ping + "!!!");
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

//1. Incrementing
var highFives = 0;
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
console.log("++highFives = " + ++highFives); //Returns 1
console.log("++highFives = " + ++highFives); //Returns 2
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
console.log("highFives++ = " + highFives++); //Returns 2 - highFives is incremented by 1 but value before incrementing is returned
console.log("highFives = " + highFives); //Returns 3

//2. Decrementing
var highFives = 3;
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
console.log("--highFives = " + --highFives); //Returns 2
console.log("--highFives = " + --highFives); //Returns 1
//If used postfix, with operator after operand (for example, x++), the decrement operator decrements and returns the value before decrementing.
console.log("highFives-- = " + highFives--); //Returns 1 - highFives is decremented by 1 but value before decrementing is returned
console.log("highFives = " + highFives); //Returns 0

//3. My Examples
let x = 3;
const y = x++; //3
console.log("x = " + x + ", and y = " + y);

console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

//
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"

//
let x2 = 3n;
console.log("x2 = " + x2); //x2 = 3
const y2 = x2++;
console.log("y2 = " + y2); //y2 is 3n
console.log("x2 = " + x2); //x2 = 4n;







