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

//myExample3:
//2. If Else IF Statements - If you want something else to happen when the condition is false.
//Each condition has code to run if the condition is true. Else: Some code to run if all the conditions are false
//myExample3:
var pay = [9999, 10000, 12000, 15000, 18000, 21000, 25000, 28000, 32000, 40000, 45000, 50000];
console.log("Pay Scales: " + pay);
var randomPayIndex = Math.floor(Math.random() * pay.length);
var randomPay = (pay[randomPayIndex]);

if (randomPay >= 3000 && randomPay < 7500) {
    console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Congratulations, you qualify for a Flexi package.");
    } else if (randomPay >= 7500 && randomPay < 20000) {
    console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Congratulations, you qualify for a Silver package.");
    } else if (randomPay >= 20000 && randomPay < 30000) {
            console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Congratulations, you qualify for a Gold package.");
    } else if (randomPay >= 30000 && randomPay < 45000) {
        console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Congratulations, you qualify for a Gold Plus package.");
    } else if (randomPay >= 45000 && randomPay < 60000) {
        console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Congratulations, you qualify for a Premium package.");
    } else if (randomPay >= 60000) {
        console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Congratulations, you qualify for a Platinum package.");
    } else {
        console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Your income does not qualify for any of our banking packages.");
    }