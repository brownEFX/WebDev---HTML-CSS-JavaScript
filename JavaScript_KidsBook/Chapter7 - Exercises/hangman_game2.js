//Hangman Game
		//Step 1: Create Array and Choose a random Word:
		var words = ["javascript", "postman", "selenium", "cucumber"];
		
		//Step 2: Choose a random Word: Math.random() returns a number < 1, Math.floor(): removes decimals
		//Multiply Math.random() by the length of the array and then call Math.floor() on that value.
		var word = words[Math.floor(Math.random() * words.length)];
		
		//Step 2: Create and setup the Answer Array and a variable to store remaining letters:
		var answerArray = [];
			for (var i = 0; i < word.length; i++) {
				answerArray[i] = "_"; //fill it with underscores (_) to match the number of letters in the word.
			}
				
		var remainingLetters = word.length;

		/*
		Add a variable to track the number of guesses and end the game if the player runs out 
		of guesses. (Hint: Check this variable in the same while loop that checks whether 
		remainingLetters > 0. As we did in Chapter 2, you can use && to check whether two
		Boolean conditions are true.)
		*/
		//var guessLimit = word.length * 1.25;
		
		//3. The game loop
		while (remainingLetters > 0) {//&& guess < guessLimit) {
			//3.1. Show the player their progress: Joins underscores|letters completed with space as separator
			alert(answerArray.join(" "));
			
			//3.2. Input - Get a guess from the player via prompt(); //toLowerCase();
			//Use the toLowerCase method to convert user input to lowercase.
			var guess = prompt("Guess a letter, or click Cancel to stop playing.").toLowerCase();
			if (guess === null) {
			break; // Exit the game loop
			} else if (guess.length !== 1) {
			alert("Please enter a single letter.");
			} else {
					// Update remainingLetters after each correct guess using decrementing(--):
					for (var j = 0; j < word.length; j++) {
					//use if (word[j] === guess) to check if he player’s guess matches letter in word
					//add another condition to check whether a value in answerArray is still an underscore so it doesn't decrement when player keeps guessing same correc t letter
					if (word[j] === guess /*&& answerArray === "_"*/) {
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