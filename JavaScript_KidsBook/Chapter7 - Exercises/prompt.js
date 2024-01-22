//User Input

//1. prompt();
var name = prompt("What's your name?");
console.log("Hello " + name);

//2. confirm();
var likesCats = confirm("Do you like cats?");
	if (likesCats) {
	console.log("You're a cool cat!");
	} else {
	console.log("Yeah, that's fine. You're still cool!"); //OK = true, Cancel === false
	}

//3. Alert
//display a message with an OK button
alert("Alert is an Information only popup with an OK button.");


//4. Creating a Hangmans Game:
//Step 1: Create Array and Choose a random Word:
var words = ["javascript", "monkey", "amazing", "pancake"];

//Math.random() always returns a number less than 1
//Math.floor(): rounds number down to the whole number below it
//Multiply Math.random() by the length of the array and then call Math.floor() on that value.
var word = words[Math.floor(Math.random() * words.length)];

//Step 2: Creating the Answer Array:
var answerArray = [];
	for (var i = 0; i < word.length; i++) {
	answerArray[i] = "_"; //fill it with underscores (_) to match the number of letters in the word.
	}

var remainingLetters = word.length;

//3. Coding the Game Loop
while (remainingLetters > 0) {
	// Game code goes here
	// Show the player their progress
	alert(answerArray.join(" "));
	// Take input from the player:
	var guess = prompt("Guess a letter, or click Cancel to stop playing.");
		if (guess === null) {
			break; //To exit the loop.
			} else if (guess.length !== 1) {
			alert("Please enter a single letter.");
			} else {
		// Update the game state with the guess:
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess;
				remainingLetters--;
			}
		}
		}
	// Update answerArray and remainingLetters for every correct guess
	}