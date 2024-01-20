//0. test
    console.log("Hello world!");

    console.log("Test: The ayes have it, the ayes have it");

    var ping = "Jessica, we are live";
    console.log(ping + "!!!");

//1. Joining Strings:
var greeting = "Hello, ";
var myName = "Kabo";
console.log(greeting + myName);
console.log(`Greetings: ${greeting} ${myName}.`);

//2. String Length:
console.log("Supercalifragilisticexpialidocious".length); //34

//3. variable.length
var javaScript = "JavaScript";
console.log(javaScript.length); //10

//4. Getting a Single Character from a String
console.log(javaScript[0]); //j
console.log(javaScript[4]); //S

//5. Cutting Up Strings
console.log("Syntax: string.slice(start, end)"); //S
console.log("Supercalifragilisticexpialidocious".slice(0, 5)); //Super

console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit".length)
console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit"[28]); //c
console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit"[38]); //r
console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit".slice(28, 39)); //consectetur adipiscing elit
console.log("Lorem ipsum dolor sit amet, consectetur adipiscing elit".slice(28)); //consectetur adipiscing elit

console.log("Syntax: variable.slice(start, end)"); //S
console.log(javaScript.slice(0, 4)); //Script

var longString = "My long string is long";
console.log(longString.slice(0, 14)); //"My long string"
console.log(longString.slice(8, 22)); //"string is long"
console.log(longString.slice(8)); //"string is long"
console.log(longString.slice(3, 14)); //"long string"

var x = longString.slice(0, 2);
var y = longString.slice(8, 22);
console.log(x + " " + y); //"My string is long"

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
console.log("Length of loremIpsum is: " + loremIpsum.length); //"My string is long"
console.log("Length of consectetur is: " + (loremIpsum.slice(28,39).length));
console.log("Length of consectetur is: " + "consectetur".length);

//6. Changing Strings to All Capital or All Lowercase Letters
//toUpperCase:
console.log("lorem ipsum dolor sit amet, consectetur adipiscing elit".toUpperCase());
//toLoweerCase:
console.log("LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT".toLowerCase());

//Change camel to sentence case
var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString); //"Hello there, how are you doing?"

//
var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase(); //"Hello there, how are you doing?"