//Login:
/*
var password = "tomorrow";
var userGuess = "";

while (userGuess != password) {
    userGuess = prompt("Please enter your password:")
}

console.log("You have entered: " + userGuess)
alert("Login successful");

*/
//doWhile - Factorial - 5*4*3*2*1
var factorial = 1;
var myNumber = 5;
var original = myNumber;
do{
    factorial *= myNumber;
    myNumber--
} while (myNumber > 0);

console.log("Factorial of " + original + " is " + factorial);

//Validation:
let number;
do {
number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));

//Look for a value in an array:

var someArray = ["Mike", "Pule", "Tumi", "Jabu", "Babo", "Tshidi", "Mpumi", "Lebo", "Jozi", "Tshilidzi", "Nyiko", "Sello", "Zanele"];
var notFound = true;
    while (notFound && someArray.length > 0) {
        if (someArray[0] === "Mpho") {
        console.log("Name found.");
        notFound = false;
        } else {
    var deletedElements  = someArray.shift();
    var newList = [];
    newList.push(deletedElements);
    console.log(newList)
    }
}


//
//4. Remove first element: use arrayName.shift():
//4.1. Remove first element: arrayName.shift();
animals.shift();

//4.2. Remove first element and store it in a variable:

    var firstAnimal = animals.shift();
    console.log(firstAnimal);

    //Add element from Variable:

    animals.unshift(firstAnimal);

    console.log(animals);

//Add Elements back:

animals.push("Alpaca"); //Adds element to the end of the array
animals.unshift("Guanaco"); //Adds element to the beginning of the array

console.log(animals);
/*
//Nested If Else If
var rate = 600;
var maxHours = 160;

//var hoursWorked = 160;
var hoursWorked = prompt("How many hours did you work this month?");
var grossPayInputValidation = function (maxHours, hoursWorked) {
    while(hoursWorked > maxHours || hoursWorked < 1) {
        console.log("Invalid entry. Your hours must be between 1 and 160. Try again.");
        //hoursWorked = scanner.nextDouble();
        hoursWorked = prompt("How many hours did you work this month?");
    }
}
grossPayInputValidation(maxHours,hoursWorked);
var grossPay = rate * hoursWorked;
console.log("Your gross pay for this month is R" + grossPay);
*/
