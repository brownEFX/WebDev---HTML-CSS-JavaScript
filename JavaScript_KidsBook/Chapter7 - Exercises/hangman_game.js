//Prep
//1. Creating a Prompt
var datName = prompt("What's your name?");
console.log("Hello " + datName);

//2. Confirm
var likesCats = confirm("Do you like cats?");
if (likesCats) {
console.log("You're a cool cat!");
} else {
console.log("Yeah, that's fine. You're still cool!");
};

//3. Alerts
console.log(alert("JavaScript is awesome!"));

//Hangman Game

	//Step 1: Create Array and Choose a random Word:
		var words = ["javascript", "monkey", "amazing", "pancake"];
		
	//Step 2: Choose a random Word: Math.random() returns a number < 1, Math.floor(): removes decimals
		//Multiply Math.random() by the length of the array and then call Math.floor() on that value.
		var word = words[Math.floor(Math.random() * words.length)];
		console.log(words);
		
	//Step 3: Create and setup the Answer Array and a variable to store remaining letters:
		var answerArray = [];
			for (var i = 0; i < word.length; i++) {
				answerArray[i] = "_"; //fill it with underscores (_) to match the number of letters in the word.
			}
				
		var remainingLetters = word.length;
		
		//3. The game loop
		while (remainingLetters > 0) {
			//3.1. Show the player their progress: Joins underscores|letters completed with space as separator
			alert(answerArray.join(" "));
			
			//3.2. Input - Get a guess from the player via prompt();
			var guess = prompt("Guess a letter, or click Cancel to stop playing.");
			if (guess === null) {
			break; // Exit the game loop
			} else if (guess.length !== 1) {
			alert("Please enter a single letter.");
			} else {
					// Update remainingLetters after each correct guess using decrementing(--):
					for (var j = 0; j < word.length; j++) {
					//use if (word[j] === guess) to check if he player’s guess matches letter in word:
					if (word[j] === guess) {
					answerArray[j] = guess;
					remainingLetters--; //--decreament n-1
					}
				}
			}
		// The end of the game loop
		}
		
		//4. Show the answer and congratulate the player
		alert(answerArray.join(" "));
		alert("Good job! The answer was " + word);