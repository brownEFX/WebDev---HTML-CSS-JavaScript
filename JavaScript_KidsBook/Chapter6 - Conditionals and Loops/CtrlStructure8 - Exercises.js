// Awesome Animals
//Write a for loop that modifies an array of animals, making them awesome!

//MyExample1 - do something with every element in an array
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

console.log(animals);

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

	/*
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
while(i < animals.length){
	console.log(animals[i] = "Awesome " + animals[i]);
	i++
}
*/

//access individual characters in a string:
var name = "Nick";
	for (var i = 0; i < name.length; i++) {
	console.log("My name contains the letter " + name[i] + ".");
	}

//Powers of 2 under 10000
for (var x = 2; x < 10000; x = x * 2) {
	console.log(x);
	}

	//Powers of 3 under 10000
	for (var x = 3; x < 10000; x *= 3) {
		console.log(x);
		}

// Exercise2: Random String Generator
//0.1. Recap:
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomIndex)
console.log(randomWords[randomIndex]);

//0.2. Recap: String to Array using Array.from();
const str = "Supercalifragilisticexpialidocious";
const arrChar = Array.from(str);
console.log(arrChar);

//0.3. String to array using  string.split
let strGeeks = "GeeksforGeeks"; // Input string
let arrGeeks = strGeeks.split(""); // using string.split to gey char array
console.log(arrGeeks); // Display output 

//1. Start with a string containing all the letters in the alphabet:

var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(alphabet);
var randomAlphabetIndex = (Math.floor(Math.random() * alphabet.length));
randomAlphabetIndex;

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

/*
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