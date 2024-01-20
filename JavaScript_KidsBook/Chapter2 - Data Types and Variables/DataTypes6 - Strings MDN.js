//0. test
console.log("Hello world!");

console.log("Test: The ayes have it, the ayes have it");

var ping = "Jessica, we are live";
console.log(ping + "!!!");

//1. String
const string = "This is my string";
console.log("My string: " + string);
console.log(`My string: ${string}`);

//2. String Length
//2.1. String Length:
console.log("mozilla".length);

console.log("Supercalifragilisticexpialidocious".length);

//2.2. variable.length
const browserType = "Mozilla";
console.log("Mozilla - string.length = " + browserType.length);

var javaScript = "JavaScript";
console.log("JavaScript - string.length = " + javaScript.length); //10

//4. Getting a Single Character from a String
console.log(browserType[0]); //m
console.log(browserType[browserType.length - 1]); //S

console.log(javaScript[0]); //j
console.log(javaScript[javaScript.length - 1]); 

//5. Testing if a string contains a substring - includes() method - boolean
browserType.includes("zilla");
console.log("Mozilla includes 'zilla': ")
console.log(browserType.includes("zilla"));

console.log("Supercalifragilisticexpialidocious includes 'califragilistic': " + ("Supercalifragilisticexpialidocious".includes("califragilistic")));

//6. String starts or ends with a particular substring.
//startsWith
console.log("Mozilla startsWith 'zilla': ")
console.log(browserType.startsWith("zilla")); //false
console.log("Mozilla startsWith 'Mozi': ")
console.log(browserType.startsWith("Mozi")); //true

//endsWith
console.log("Mozilla endsWith 'zilla': ")
console.log(browserType.endsWith("zilla")); //false
console.log("Mozilla endsWith 'Mozi': ")
console.log(browserType.endsWith("Mozi")); //true

//7. Finding the position of a substring in a string
console.log("JavaScript is a high-level, often just-in-time compiled language.".indexOf("Script"));

const jsTagline = "JavaScript is a high-level, often just-in-time compiled Script language.";
console.log("indexOf 'Script': " + jsTagline.indexOf("Script")); // 20

//Finding subsequent occurrences
const firstOccurance = (jsTagline.indexOf("Script"));
const secondOccurance = (jsTagline.indexOf("Script", firstOccurance + 1));
console.log("indexOf secondOccurance of 'Script': " + secondOccurance);

//8. Cutting Up Strings
console.log("Syntax: string.slice(start, end)"); //S
console.log(browserType.slice(1, 4)); // "ozi"
browserType.slice(2); // "zilla"
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
const radData = "My NaMe Is MuD";
console.log("toLowerCase: " + radData.toLowerCase());
console.log("toUpperCase: " + radData.toUpperCase());

var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString); //"Hello there, how are you doing?"
console.log(`${firstCharacterUpper}${restOfString}`);
//Camel to Sentence Case:
var sillyString = "hELlo THERE, hOW ARE yOu doINg?";
sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase(); //"Hello there, how are you doing?"

//7. Updating Parts of a String: replace();
console.log('Replace method Syntax: variableNm.replace("original", "new")');

console.log("browserType = " + browserType);
const updated = browserType.replace("moz", "van");
console.log("Updated value: " + updated);

let browser = "mozilla";
browser = browser.replace("moz", "van");
console.log("Updated browser value: " + browserType);

//7. Updating Parts of a String: replaceAll();
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"

//1. Joining Strings:
var greeting = "Hello, ";
var myName = "Kabo";
console.log(greeting + myName);