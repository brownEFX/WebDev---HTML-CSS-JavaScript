//1. Boolean
console.log("Boolean: 2 == 2: ");
console.log(2 == 2);
console.log("Boolean: 2 === 2: ");
console.log(2 === 2);
console.log("Boolean: 2 != 2: ");
console.log(2 != 2);

//2. Boolean/Logical Operators:
//2.1. Boolean/Logical Operators: && (AND)

//2.2. Boolean/Logical Operators: || (OR)

//2.3. Boolean/Logical Operators: ! (NOT)

//2.4. Boolean/Logical Operators: Combining Logical Operators (&&, ||, !)
var x = 2;
console.log("x = " + x);
console.log(`x: ${x}`);
var y = 4;
console.log("y = " + y);

console.log("x == y: ");
console.log(x == y);

console.log("(x + 2) == y:");
console.log((x + 2) == y);

console.log("x === y: ");
console.log(x === y);

console.log("(x + 2) === y:");
console.log((x + 2) === y);

console.log("x != y: ");
console.log(x != y);

console.log("(x + 2) != y: ");
console.log((x + 2) != y);

var z = (x != y) && (x === y);
console.log(z);

var z = (x != y) || (x === y);
console.log(z);

//2.5. Comparing Numbers with Booleans
//Greater than:
var height = 65;
var heightRestriction = 60;
console.log("height > heightRestriction:")
height > heightRestriction; //true

var height = 60;
var heightRestriction = 60;
console.log("height > heightRestriction:")
height > heightRestriction; //false

console.log("height >= heightRestriction:")
height >= heightRestriction; //true

//Less than:
var height = 60;
var heightRestriction = 48;
console.log("height < heightRestriction:")
height < heightRestriction; //false

//Less and equals to:
var height = 48;
var heightRestriction = 48;
console.log("height <= heightRestriction:")
height <= heightRestriction; //true

//Equal to:
var mySecretNumber = 5;
console.log("mySecretNumber = " + mySecretNumber);

var chicoGuess = 3;
console.log("chicoGuess = " + chicoGuess);
console.log("mySecretNumber === chicoGuess: ");
console.log(mySecretNumber === chicoGuess); //false

var harpoGuess = 7;
console.log("harpoGuess = " + harpoGuess); 
console.log("mySecretNumber === harpoGuess: "); 
console.log(mySecretNumber === harpoGuess); //false

var grouchoGuess = 5;
console.log("grouchoGuess = " + grouchoGuess);
console.log("mySecretNumber === grouchoGuess: "); //true
console.log(mySecretNumber === grouchoGuess);

//Double Equals “equal-ish" - string vs number
var stringNumber = "5";
console.log("stringNumber = " + stringNumber);
var actualNumber = 5;
console.log("actualNumber: " + actualNumber);
console.log("stringNumber === actualNumber:");
console.log(stringNumber === actualNumber); //false
console.log("stringNumber == actualNumber:");
console.log(stringNumber == actualNumber); //true

//PG-13
//Age < 13 && accompanied = true
var age = 12;
var accompanied = true;
console.log("Age = " + age)

if (age < 13 && accompanied || age >= 13) {
console.log("Welcome, enjoy the movie.");
}else {
    console.log("You are " + age + " years old and too young to watch this movie unaccompanied. Please come accompanied by an adult.");
    }

//Age < 13 && accompanied = false   
age = 12;
accompanied = false;
console.log("Age = " + age)

if (age < 13 && accompanied || age >= 13) {
console.log("Welcome, enjoy the movie.");
}else {
    console.log("You are " + age + " years old and too young to watch this movie unaccompanied. Please come accompanied by an adult.");
    }

//Age >= 13 && accompanied = false
age = 13;
accompanied = false;
console.log("Age = " + age)

if (age < 13 && accompanied || age >= 13) {
console.log("Welcome, enjoy the movie.");
}else {
    console.log("You are " + age + " years old and too young to watch this movie unaccompanied. Please come accompanied by an adult.");
    }

//undefined and null
//Declared but not initialised (variable value not set):
var myVariable;
console.log("Undefined variable: " + myVariable);

//NULL
var myNullVariable = null;
console.log("Undefined variable: " + myNullVariable);



























