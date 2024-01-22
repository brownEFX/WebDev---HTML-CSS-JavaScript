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

/*
//WhileLoop
//my Example: Gambler https://introcs.cs.princeton.edu/java/13flow/Gambler.java.html
var stake  = prompt("Please enter stake:");    // gambler's starting bankroll
var goal   = prompt("Please enter goal:");    // gambler's desired bankroll
var trials = prompt("Please enter trials:");    // number of trials to perform

console.log("Stake: " + stake);
console.log("Goal: " + goal);
console.log("Trials: " + trials);

var bets = 0;        // total number of bets made
var wins = 0;        // total number of games won

// repeat trials times
for (var t = 0; t < trials; t++) {

    // do one gambler's ruin simulation
    var cash = stake;
    while (cash > 0 && cash < goal) {
        bets++;
        if (Math.random() < 0.5) cash++; // win $1
        else                     cash--; // lose $1
    }
    if (cash == goal) wins++; // did gambler go achieve desired goal?
}

// print results
console.log(wins + " wins of " + trials);
console.log("Percent of games won = " + 100.0 * wins / trials);
console.log("Avg # bets = " + 1.0 * bets / trials);
*/