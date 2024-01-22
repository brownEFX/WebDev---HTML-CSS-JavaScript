//Dollar Game
		//Step 1: Create Array and Choose a random Word:

		var penny = .01;
        var nickel = .05;
        var dime = .10;
        var quarter = .25;

        var dollar = 1;

		alert("Welcome to 'Change for a Dollar'. Your goal is to enter enough change to make exactly $1.00");
		
		//2. User Input:
		var numOfPennies = prompt("Enter number of pennies:");
		console.log("Number of pennies: " + numOfPennies);
		var numOfNickels = prompt("Enter number of nickels:");
		console.log("Number of pennies: " + numOfNickels);
		var numOfDimes = prompt("Enter number of dimes:");
		console.log("Number of pennies: " + numOfDimes);
		var numOfQuarters = prompt("Enter number of quarters:");
		console.log("Number of pennies: " + numOfQuarters);

		var total = numOfPennies * penny + numOfNickels * nickel + numOfDimes * dime + numOfQuarters * quarter;

		if (numOfPennies == "") {
			//alert("Please enter number of coins.");
			//prompt("Enter number of pennies:");
			
		} else if (numOfPennies < 0) {
			//alert("Please enter a positive number.");
			prompt("Enter number of pennies:");
			} else {
				if(total < dollar){
					var amountShort = dollar - total;
					//Way to make the decimal print with only 2 decimal places
					alert("Sorry, you lose! You were short " + amountShort + " cents.");
				}
				else if(total > dollar){
					var amountOver = total - dollar;
		
					//Way to make the decimal print with only 2 decimal places
					alert("Sorry, you lose! You were over " + amountOver + " cents.");
				}
				else{
					alert("Yay! That's exactly $1.00! You win!");
				}
			}
		
		/*4. Show the answer and congratulate the player
		alert(answerArray.join(" "));
		alert("Good job! The answer was " + word);
		*/