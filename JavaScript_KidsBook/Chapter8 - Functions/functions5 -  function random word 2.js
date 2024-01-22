//Revisiting the Insult Generator:
//Arrays && Variables:
var randomBodyParts = ["Face", "Nose", "Hair", "Foot", "Hand"];
var randomAdjectives = ["Smelly", "Boring", "Stupid", "Dry", "Ashy"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//Pick random words from each array:
// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Join all the random strings into a sentence:
var randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

console.log(randomString);

//Using A Function to Pick a Random Word


//6.2. Using A Function to Pick a Random Word
	//Array
	var randomBodyParts = ["Face", "Nose", "Hair"];
	var randomAdjectives = ["Smelly", "Boring", "Stupid"];
	var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
	//Define a pickRandomWord function.
	var pickRandomWord = function (randomBodyParts) {
		return randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
	};
	//pick a random word from this array using the pickRandomWord function,
	console.log(pickRandomWord(randomBodyParts));

// Join all the random strings into a sentence:
var randomWordString = "Your " + pickRandomWord(randomBodyParts) 
	+ " is like a " + pickRandomWord(randomAdjectives) 
	+ " " + pickRandomWord(randomWords) + "!!!";
	
	randomWordString; //"Your Nose is like a Smelly Marmot!!!"

//6.3. Making the Random Insult Generator into a Function - the next Step:
generateRandomInsult = function () {
	var randomBodyParts = ["Face", "Nose", "Hair"];
	var randomAdjectives = ["Smelly", "Boring", "Stupid"];
	var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

	// Join all the random strings into a sentence:
	var randomInsultString = 
	`Your ${pickRandomWord(randomBodyParts)} is like a ${pickRandomWord(randomAdjectives)} ${pickRandomWord(randomWords)}`;

	return randomInsultString;
};
console.log(`Do not beep this out: ${randomString}`);

console.log(`Do not beep this out: ${generateRandomInsult()}!`);