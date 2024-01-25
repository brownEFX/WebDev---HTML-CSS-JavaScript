//WhileLoop
var sheepCounted = 0;
while (sheepCounted < 10) {
console.log("I have counted " + sheepCounted + " sheep.");
sheepCounted++;
}
console.log("Zzzzzzzzzzz");

//MyExample1
var count = 1;
        while (count < 11) {
            console.log("Count is: " + count);
            count++;
        }

//MyExample2
//var phones = {"Apple", "Android", "Xiaomi", "Lenovo"};
var phones = ["Apple", "Samsung", "Xiaomi", "Huawei", "Motorolla", "Nokia", "Google Pixel"];
    
//initialization
var i = 0;
    
while(i < phones.length) {
    console.log("I have " + phones[i] + " smartphone.");
    i++;
}

//MyExample2
var x = 3;
while (x < 10000) {
//console.log("I have counted " + sheepCounted + " sheep.");
console.log("x is equal to " + x)
x = x * 3; //x *= 3;
}

//MyExample1 - Factorial - 8! = 1 × 2 × 3 × 4 × 5 × 6 × 7 x 8
var n = 8;
         
//initialization
var factorial = 1;
var i = 1;
 
while(i<=n) {
    factorial = factorial * i;
    console.log("Factorial of " + i + " is equal to " + factorial)
    i++;
}
 
console.log("Factorial of " + n + " = " + factorial);


//MyExample2
var x = 3;
while (x < 10000) {
//console.log("I have counted " + sheepCounted + " sheep.");
console.log(x)
x = x * 3;
};

//MyExample3 - 𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(x,y) = x^y
var x = 10;
var y = 10;
console.log(Math.pow(x,y));

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

//myExample - Power of Two
// read in one command-line argument
var n = 8; //var n = Integer.parseInt(args[0]);

var i = 0;                // count from 0 to N
var powerOfTwo = 1;       // the ith power of two

// repeat until i equals n
while (i <= n) {
    console.log(i + " " + powerOfTwo);   // print out the power of two
    powerOfTwo = 2 * powerOfTwo; // double to get the next one | powerOfTwo *= 2
    i = i + 1;
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

//my Example: Gambler https://introcs.cs.princeton.edu/java/13flow/Gambler.java.html
var stake  = prompt("Please enter stake:");    // gambler's stating bankroll
var goal   = prompt("Please enter goal:");    // gambler's desired bankroll
var trials = prompt("Please enter trials:");    // number of trials to perform

var bets = 0;        // total number of bets made
var wins = 0;        // total number of games won

// repeat trials times
for (var t = 0; t < trials; t++) {

    // do one gambler's ruin simulation
    var cash = stake;
    while (cash > 0 && cash < goal) {
        bets++;
        if (Math.random() < 0.5) cash++;     // win $1
        else                     cash--;     // lose $1
    }
    if (cash == goal) wins++;                // did gambler go achieve desired goal?
}

// print results
console.log(wins + " wins of " + trials);
console.log("Percent of games won = " + 100.0 * wins / trials);
console.log("Avg # bets = " + 1.0 * bets / trials);

//MyExample - Square https://beginnersbook.com/2022/06/java-program-to-print-hollow-square-star-pattern/
var i=0, j;
//Getting the size of the square side from user
var sideSize = prompt("Enter the stars in each side of square: ");

console.log("Hollow Square Star Pattern: ");

while (i < sideSize )
{
  j = 0 ;
  while ( j < sideSize )
  {
    if (i == 0 || i == sideSize - 1 || j == 0 || j == sideSize - 1) {
        console.log("*"+ " ");
    }
    else {
        console.log(" "+ " ");
    }
    j++;
  }
  //To move cursor to new line for next row
  console.log();
  i++;
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