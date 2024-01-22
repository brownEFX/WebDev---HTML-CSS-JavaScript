//1. If Statements - used to execute a piece of code if something is true. 
//Example:
var firstName = "Nicholas"; 
console.log("Hello " + firstName);
if (firstName.length > 5) {
    console.log("Wow, you have a REALLY long name!");
    } else {
    console.log("Your name isn't very long.");
    }
//myExample1:
var randomNames = ["Tshepo", "Puseletso", "Kamogelo", "Nthabiseng", "Modise", "Matshediso", "Mmapule", "Koketso", "Kagiso", "Thabo"];
var randomNamesIndex = Math.floor(Math.random() * randomNames.length);
console.log(randomNames[randomNamesIndex]);


var randomName = (randomNames[randomNamesIndex]);
 console.log("Random name: " + randomName);
    if (randomName.length > 6) {
        console.log(randomName.length +" letters! Wow, that's a REALLY long name!");
        }else {
            console.log(randomName.length +" letters! Your name isn't very long.");
            }
		
//myExample2:
var randomWords = ["Dictum", "Truism", "Maxim", "Axiom", "Adage", "Aphorism", "Platitude", "Cliche"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomWords[randomIndex]);


var randomWord = (randomWords[randomIndex]);
 console.log("Word of the day: " + randomWord);
    if (randomWord.length > 5) {
        console.log(randomWord.length +" letters! Wow, that's a REALLY long word!");
        }else {
            console.log(randomWord.length +" letters! This is a fairly short word.");
            }

//myExample3:
var pay = [9999, 10000, 12000, 15000, 18000, 21000, 25000, 28000, 32000, 40000, 45000, 50000];
console.log("Pay Scales: " + pay);

var randomPayIndex = Math.floor(Math.random() * pay.length);

var randomPay = (pay[randomPayIndex]);
    if (randomPay >= 10000 && randomPay < 20000) {
        console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Congratulations, you qualify for a Silver package.");
        }else {
            console.log("Your pay is R" + (pay[randomPayIndex]) + " per month. Please contact us at 0860010020.");
            }

//2. If Else IF Statements - If you want something else to happen when the condition is false.
//Each condition has code to run if the condition is true. Else: Some code to run if all the conditions are false

console.log("Pay Scales: " + pay);
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

//myExample - CoinFlip https://introcs.cs.princeton.edu/java/13flow/Flip.java.html

    // Math.random() returns a value between 0.0 and 1.0
    // so it is heads or tails 50% of the time
    if (Math.random() < 0.5) {
        console.log("Heads");
    } else {
        console.log("Tails");
    } ;              