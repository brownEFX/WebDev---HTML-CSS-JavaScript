//1. If Statements - used to execute a piece of code if something is true. 
//Example:
    var firstName = "Nicholas"; 
    console.log("Hello " + firstName);
    if (firstName.length > 7) {
        console.log("Wow, you have a REALLY long name!");
        }

//myExample1:
var randomWords = ["Dictum", "Truism", "Maxim", "Axiom", "Adage", "Aphorism", "Platitude", "Cliche"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomWords[randomIndex]);


var randomWord = (randomWords[randomIndex]);
 console.log("Word of the day: " + randomWord);
    if (randomWord.length > 5) {
        console.log("Wow, that's a REALLY long word!");
        }

//myExample2:
var pay = [9999, 10000, 12000, 15000, 18000, 21000, 25000, 28000, 32000, 40000, 45000, 50000];
var randomPayIndex = Math.floor(Math.random() * randomWords.length);
console.log(pay[randomPayIndex]);


var randomPay = (pay[randomPayIndex]);
 console.log("Pay Scales: " + pay);
    if (randomPay >= 10000 && randomPay < 20000) {
        console.log("Congratulations, you qualify for a Silver package.");
        }
//2. If Else Statements - If you want something else to happen when the condition is false, you need to use an if...else statement.

if (randomPay >= 20000 && randomPay < 30000) {
    console.log("Congratulations, you qualify for a Gold package.");
    } else {
        console.log("Your income does not qualify for our banking package.");
    }
		
		
//1. If Else IF Statements - If you want something else to happen when the condition is false.
//Each condition has code to run if the condition is true. Else: Some code to run if all the conditions are false

console.log("Pay Scales: " + pay);
if (randomPay >= 3000 && randomPay < 7500) {
    console.log("Congratulations, you qualify for a Flexi package.");
    } else if (randomPay >= 7500 && randomPay < 20000) {
    console.log("Congratulations, you qualify for a Silver package.");
    } else if (randomPay >= 20000 && randomPay < 30000) {
            console.log("Congratulations, you qualify for a Gold package.");
    } else if (randomPay >= 30000 && randomPay < 45000) {
        console.log("Congratulations, you qualify for a Gold Plus package.");
    } else if (randomPay >= 45000 && randomPay < 60000) {
        console.log("Congratulations, you qualify for a Premium package.");
    } else if (randomPay >= 60000) {
        console.log("Congratulations, you qualify for a Platinum package.");
    } else {
        console.log("Your income does not qualify for any of our banking packages.");
    }



//WhileLoop
var x = 1, sum = 0;
 
// Exit when x becomes greater than 10
while (x <= 10) {
    // summing up x
    sum = sum + x;
    // Increment the value of x for next iteration
    x++;
}
console.log("Summation: " + sum);

var sheepCounted = 0;
while (sheepCounted < 10) {
console.log("I have counted " + sheepCounted + " sheep.");
sheepCounted++;
}
console.log("Zzzzzzzzzzz");

//WhileLoop
var x = 3;
while (x < 10000) {
//console.log("I have counted " + sheepCounted + " sheep.");
console.log("x is equal to " + x)
x = x * 3;
}

var base = 10
var exponent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomExponent = Math.floor(Math.random() * randomWords.length);
console.log("Random index of exponent is " + randomExponent);
console.log("Element is " + exponent[randomExponent]);
//𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(x,y) = x^y
console.log(Math.pow(10,10));
while (base <= 10) {
    //console.log("I have counted " + sheepCounted + " sheep.");
    console.log("Base is equal to " + base);
    power = (Math.pow(base,exponent[randomExponent]));
    console.log(power);
    //base = Math.pow(base,exponent[randomExponent])
    }

/*
var base = 10
var exponent = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomExponent = Math.floor(Math.random() * randomWords.length);
console.log("Random index of exponent is " + randomExponent);
console.log("Element is " + exponent[randomExponent]);
//𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(x,y) = x^y
console.log(Math.pow(10,10));
console.log(Math.pow(base,exponent[randomExponent]));
console.log(base + " to the power of " + exponent[randomExponent] + " is " + Math.pow(base,exponent[randomExponent]));

while (base < 10) {
    //console.log("I have counted " + sheepCounted + " sheep.");
    console.log("Base is equal to " + base);
    power = base * exponent[randomExponent];
    console.log(power);
    //base = Math.pow(base,exponent[randomExponent])
    }
*/
   

var randomPay = (pay[randomPayIndex]);
 console.log("Pay Scales: " + pay);
    if (randomPay >= 10000 && randomPay < 20000) {
        console.log("Congratulations, you qualify for a Account package.");
        }