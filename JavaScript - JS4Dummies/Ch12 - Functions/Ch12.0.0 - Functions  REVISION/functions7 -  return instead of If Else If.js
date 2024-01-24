//6.5. Using return Multiple Times Instead of if...else Statements
//A score of 3 or below is a bronze medal, scores between 3 and 7 are silver, and anything above 7 is gold.

//If...Else...If Statement
var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;

	if (lemonChicken) {
		console.log("Great! I'm having lemon chicken!");
		} else if (beefWithBlackBean) {
		console.log("I'm having the beef.");
		} else if (sweetAndSourPork) {
		console.log("OK, I'll have the pork.");
		} else {
		console.log("Well, I guess I'll have egg-fried rice then.");
	}


//Using return Multiple Times 
var medalForScore = function (score) {
	//score < 3 = bronze medal
	if (score < 3) {
		 return `Congratulations. You get a Bronze medal`;
	}
	//score < 7 = Silver medal
	if (score < 7) {
		return `Congratulations. You get a Silver medal`;
	}
	//score > 7 = Gold medal
		return `Congratulations. You get a Gold  medal`;;
};

console.log(medalForScore(1));
//
	var yourScore = function (score) {
		//score < 3 = bronze medal
		if (score < 3) {
			 return `Your score is ${score}.`;
		}
	
		//score < 7 = bronze medal
		if (score < 7) {
			return `Your score is ${score}.`;
		}
		//score > 7 = bronze medal
			return `Your score is ${score}.`;
	};

	console.log(yourScore(8));

	console.log(yourScore(8), medalForScore(8));