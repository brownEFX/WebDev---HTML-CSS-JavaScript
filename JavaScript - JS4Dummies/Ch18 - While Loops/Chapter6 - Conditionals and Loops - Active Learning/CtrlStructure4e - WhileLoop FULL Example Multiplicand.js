// Example of while loop: product through repeated sums

//multiplicand - a quantity which is to be multiplied by another (the multiplier).
var x = prompt("Please enter multiplicant:");
console.log("Multiplicand = " + x);
// multiplicator - the number by which another number, the multiplicand, is multiplied.
var y = prompt("Please enter multiplicator:");
console.log("Multiplicator = " + y);

//parseInt() or parseFloat() to convert the values into integers or floats respectively.
var multiplicand = parseInt(x);
var multiplicator = parseInt(y);
var product = 0;

while(multiplicator > 0) {
    product += multiplicand; //product *= multiplicand;
    --multiplicator;
    console.log("The Product of " + multiplicand + " and " + multiplicator + " = " + product);
}