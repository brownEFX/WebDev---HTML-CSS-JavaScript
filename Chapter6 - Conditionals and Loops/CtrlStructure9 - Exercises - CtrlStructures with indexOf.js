//indexOf();
//access individual characters in a string:
var hisName = "Nick";
	for (var i = 0; i < hisName.length; i++) {
	console.log("My name contains the letter " + hisName[i] + ".");
	}

// Exercise2: Random String Generator
//0.1. Recap:
	var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
	var randomIndex = Math.floor(Math.random() * randomWords.length);
	console.log("Random index: " + randomIndex)
	console.log("Random word: " + randomWords[randomIndex]);

//0.2. Finding all the occurrences of an element
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

	const indices = [];
	const array = ["a", "b", "a", "c", "a", "d", "e", "c", "d", "f", "g", "a", "h", "i", "j"];
	const element = "a";
	let idx = array.indexOf(element);
	while (idx !== -1) {
	indices.push(idx);
	idx = array.indexOf(element, idx + 1);
	}
	console.log("Indices for all the occurrences of an element " + element + " is: " + indices); // [0, 2, 4]

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

