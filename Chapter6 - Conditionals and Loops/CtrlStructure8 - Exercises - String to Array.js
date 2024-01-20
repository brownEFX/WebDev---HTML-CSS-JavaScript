//STRINGS
//1. Save strings into variables
	var myAwesomeString = "Something REALLY awesome!!!";
	console.log(myAwesomeString)

//2. Joining Strings
	var greeting = "Hello, ";
	var myName = "P!nk";
	console.log(greeting + myName);

//3. Length of the string:

	console.log("Length of a string: " + ("pneumonoultramicroscopicsilicovolcanoconiosis".length));

	var longlongWord = "pneumonoultramicroscopicsilicovolcanoconiosis";
	console.log("Length of a string in a variable : " + (longlongWord.length));

	var maryPoppins = "Supercalifragilisticexpialidocious";

	var joinedString = longlongWord + joinedString;
	console.log(joinedString.length);

//4. Getting a Single Character from a String: variableName[index]

var herName = "Goratileone"
console.log(herName);
herName[0]; //G
herName[1]; //0
herName[(herName.length) - 1]; //last elements

//Example:
var codeWord1 = "are";
var codeWord2 = "tubas";
var codeWord3 = "unsafe";
var codeWord4 = "?!";

var codeWord = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];
console.log(codeWord);
console.log("This is a code word: " + codeWord);

//access individual characters in a string:
var hisName = "Nick";
	for (var i = 0; i < hisName.length; i++) {
	console.log("My name contains the letter " + hisName[i] + ".");
	}

//5. Cutting Up Strings - variableName.slice(start, end);
var longString = "My long string is long";
console.log(longString.slice(3)); //"long string is long"
console.log(longString.slice(0, 14)); //"My string"
console.log(longString.slice(3, 14)); //"long string"

//6. Changing Strings .toUpperCase() or toLowerCase()
console.log("Hello there, how are you doing?".toUpperCase());
console.log("Hello THERE, how Are yOu doINg?".toLowerCase());

// Exercise2: Random String Generator
//0.1. Recap:
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log("Random index: " + randomIndex)
console.log("Random word: " + randomWords[randomIndex]);

//0.2. Getting a Single Character from a String 

var strLit = "Supercalifragilisticexpialidocious";
var randomStrLitIndex = Math.floor(Math.random() * strLit.length);
console.log("Random strLit index: " + randomStrLitIndex)
console.log(strLit[randomStrLitIndex]);

var randomStrLit = " ";

var letters = 0;
while(letters < strLit.length) {
	randomStrLit += strLit[Math.floor(Math.random() * strLit.length)];
	letters ++;
}
console.log("Random Letter String: " + randomStrLit);
/*
while(i < alphabet.length) {
	var match = randomAlphabetString.match(alphabet[randomAlphabetIndex]) ? "true" : "false"
	console.log(match);
	if (match === "false") {
		randomAlphabetString += alphabet[Math.floor(Math.random() * alphabet.length)];
		i --;
	}

};
console.log(randomAlphabetString);
*/
//String to Array
	//0.3. Recap: String to Array using Array.from();
	const str = "Supercalifragilisticexpialidocious";
	const arrChar = Array.from(str);
	console.log(arrChar);

	//0.4. String to array using  string.split
	let strGeeks = "GeeksforGeeks"; // Input string
	let arrGeeks = strGeeks.split(""); // using string.split to gey char array
	console.log(arrGeeks); // Display output 

//1. Start with a string containing all the letters in the alphabet:

	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	console.log("Alphabet array: " + alphabet);

	var randomAlphabetIndex = (Math.floor(Math.random() * alphabet.length));
	console.log("Randomly selected alphabet index: " + randomAlphabetIndex);
	console.log("Randomly selected element: " + alphabet[randomAlphabetIndex]);

//2. Create a random string

		var randomAlphabetString = " ";

//3. Create a While loop
/*
var match = randomAlphabetString.match(alphabet[randomAlphabetIndex]) ? "true" : "false"
console.log(match);


var i = 0;
    
while(i < alphabet.length) {
	var match = randomAlphabetString.match(alphabet[randomAlphabetIndex]) ? "true" : "false"
	console.log(match);
	if (match === "false") {
		randomAlphabetString += alphabet[Math.floor(Math.random() * alphabet.length)];
		i --;
	}

};
console.log(randomAlphabetString);



	const charArry = Array.from(str);
	console.log(charArry);

	var randomLetters = "abcdefghijklmnopqrstuvwxyz";
	//Length:
	"abcdefghijklmnopqrstuvwxyz".length;
	randomLetters.length;
	//Convert string to array:
	var letterArr = randomLetters.split("");
	console.log(letterArr);

	var randomLetterIndex = Math.floor(Math.random() * letterArr.length);
	console.log(randomLetterIndex)
	console.log(randomLetters[randomLetterIndex]);

	var randomString = " ";
//

//MyExample2
//var phones = {"Apple", "Android", "Xiaomi", "Lenovo"};
var phones = ["Apple", "Samsung", "Xiaomi", "Huawei", "Motorolla", "Nokia", "Google Pixel"];
    
//initialization
var match = randomString.match(randomLetters[randomLetterIndex]) ? "true" : "false"
console.log(match)
var i = 0;
    
while(i < letterArr.length) {
	var match = randomString.match(randomLetters[randomLetterIndex]) ? "true" : "false"
	console.log(match);
	if (match === "false") {
		randomString += letterArr[Math.floor(Math.random() * letterArr.length)];
		i --;
	}

};
console.log(randomString);
*/

// Awesome Animals
//Write a for loop that modifies an array of animals, making them awesome!
/*
//MyExample1 - do something with every element in an array
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

console.og(animals);

console.log(animals.length);

for (var i = 0; i < animals.length; i++) {
	console.log("This zoo contains a " + animals[i] + ".");
	}

//MyExample2 - do something with every element in an arrayWrite a for loop that modifies an array of animals, making them awesome!
//1. Create Array
var animals = ["Cat", "Fish", "Lemur", "Komondo Dragon"];
console.log(animals);

//2. Reassign values to the Array at each index
for (var i = 0; i < animals.length; i++) {
	//console.log(animals[i] = "Awesome " + animals[i]);
	console.log("This zoo contains an " + (animals[i] = "awesome " + animals[i]));
	};

	
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
while(i < animals.length){
	console.log(animals[i] = "Awesome " + animals[i]);
	i++
}
*/