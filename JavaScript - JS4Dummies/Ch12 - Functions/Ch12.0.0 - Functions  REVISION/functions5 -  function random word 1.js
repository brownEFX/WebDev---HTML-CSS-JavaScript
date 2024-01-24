//6. Using Functions to Simplify Code

//6.1. From Chapter 3 : Random Words: EXAMPLE1: a function that returns a value

	//EXAMPLE1:
	//Step 1: Create Array and Choose a random Word:
	var words = ["javascript", "monkey", "amazing", "pancake"];

	//Step 2: Choose a random Word: Math.random() returns a number < 1, Math.floor(): removes decimals
	//Multiply Math.random() by the length of the array and then call Math.floor() on that value.
	var word = words[Math.floor(Math.random() * words.length)];	
	
	//EXAMPLE1:
	var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
        var randomIndex = Math.floor(Math.random() * randomWords.length);
        console.log(randomIndex)
        console.log(randomWords[randomIndex]);

//6.2. Using A Function to Pick a Random Word
	//Array
	var myWords = ["glib", "pithy", "blithe", "testy", "fib", "foible"];

	//Define a pickRandomWord function.
	var pickRandomWord = function (myWords) {
		return myWords[Math.floor(Math.random() * myWords.length)];
	};
	console.log(`RandomWord: ${pickRandomWord(myWords)}`);

	var pickRandomIndex = function (myWords) {
		return [Math.floor(Math.random() * myWords.length)];
		//return(pickRandomWord)
		};
		console.log(`RandomIndex: ${pickRandomIndex(myWords)}`);

		console.log(`Index of RandomWord: ${myWords.indexOf(pickRandomWord(myWords))}`); //myWords.indexOf('red', 4));
/*
	//Define a pickRandomIndex function.
	var pickRandomIndex = function (myWords) {
		return [Math.floor(Math.random() * myWords.length)];
		};
		console.log(pickRandomIndex(adjectives));

	//pick a random word from this array using the pickRandomWord function,
	console.log(pickRandomIndex(myWords));

	console.log(pickRandomWord(myWords));
*/
//create a randomWords array
var theseWords = ["Plant", "Tree", "Flower", "Lawn"];

//pick a random word from this array using the pickRandomWord function,
console.log(`theseWords RandomWord: ${pickRandomWord(theseWords)}`);
console.log(`theseWords RandomIndex: ${pickRandomIndex(theseWords)}`);

//use this same function on any array
console.log(pickRandomWord(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));
console.log(pickRandomIndex(["Charlie", "Raj", "Nicole", "Kate", "Sandy"]));

var adjectives = ['generous', 'adorable', 'decidedly', 'horrid', 'splendid', 'cool', 'awesome']
console.log(adjectives);
console.log(adjectives.length);

console.log(`adjectives RandomWord: ${pickRandomWord(adjectives)}`);
console.log(`adjectives RandomIndex: ${pickRandomIndex(adjectives)}`);

//
var fruits = ["Apple", "Banana", "Orange", "Berry", "pineapple"];
console.log(pickRandomWord(fruits));

console.log(`adjectives RandomWord: ${pickRandomWord(fruits)}`);
console.log(`adjectives RandomIndex: ${pickRandomIndex(fruits)}`);

var veggies = ["Spinach", "Kale", "Cabbage", "Peas", "Beans"];

console.log(`veggies RandomWord: ${pickRandomWord(veggies)}`);
console.log(`veggies RandomIndex: ${pickRandomIndex(veggies)}`);

var nuts = ["Peanuts", "Pinenuts", "Almonds", "Cashews", "Pecans"];
console.log(pickRandomWord(nuts));

console.log(`adjectives RandomWord: ${pickRandomWord(nuts)}`);
console.log(`adjectives RandomIndex: ${pickRandomIndex(nuts)}`);