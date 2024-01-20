//Arrays - Programming Challenges:
//1. New Insults:
var randomBodyParts = ["Eyes", "Knees", "Feet"];
var randomAdjectives = ["Bigger", "Smaller", "Wider"];
var randomWords = ["Elephant", "Rabbit", "Cow", "Rhino", "Bird"];
// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Join all the random strings into a sentence:
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";
randomInsult;

//OR even better:
var randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");

//2. More Sophisticated Insults
//Extend the random insult generator so it generates insults like 
//“Your [body part] is more [adjective] than a [animal]’s [animal body part].” 
//(Hint: You’ll need to create another array.)

var randomAnimalBodyParts = ["Eyes", "Knees", "Feet"];
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * randomAnimalBodyParts.length)];
var newRandomInsult = "Your " + randomBodyPart + " are  " + randomAdjective + " than " + randomWord + "'s " + randomAnimalBodyPart;
console.log(newRandomInsult);

//3: Use + or join?
//Make two versions of your random insult generator that creates an array and joins it with " ". Which do you prefer, and why?

var randomInsult = ["Your", randomBodyPart, "are", randomAdjective, randomWord+"'s ", randomAnimalBodyPart].join(" ");
console.log(randomInsult);




    //7.3. Create a random index.
        //a. multiply Math.random() by the length of the array and then call Math.floor() on that value.

        console.log("Math.floor(Math.random() * 4): " + Math.floor(Math.random() * 4)); // could be 0, 1, 2, or 3

        //b. use random number as an index:
        var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
        var randomIndex = Math.floor(Math.random() * randomWords.length);
        console.log("randomIndex: " + randomIndex);
        console.log(`randomIndex: ${randomIndex}`);
        console.log("randomWords[randomIndex]: " + randomWords[randomIndex]);

        //OR even better
        var wines = ["Cabernet Sauvignon", "Merlot", "Shiraz", "Pinotage"];
        var randomIndex = Math.floor(Math.random() * randomWords.length);
        console.log("randomIndex: " + randomIndex);
        console.log("randomWords[randomIndex]: " + randomWords[randomIndex]);


//MyExample
var redWines = ["Cabernet Sauvignon", "Merlot", "Shiraz", "Pinotage"];
var tastingNotes = ["elegant", "harmonious", "layered", "refined"];
var tastingProfile = ["black cherry", "plum,", "berries", "cranberries", "dark chocolate"];
// Pick a random wine from the redWines array:
var randomReds = redWines[Math.floor(Math.random() * redWines.length)];
// Pick a random palate from the palateAdjectives array:
var randomNotes = tastingNotes[Math.floor(Math.random() * tastingNotes.length)];
// Pick a random word from the randomWords array:
var randomProfile = tastingProfile[Math.floor(Math.random() * tastingProfile.length)];
// Join all the random strings into a sentence:
var randomWine = "The " + randomReds + " is " + randomNotes + ". This red wine tastes like " + randomProfile + ".";
console.log(randomWine);

//OR even better:
var tastingNotes = (`The ${randomReds} is ${randomNotes} and tastes like ${randomProfile}.`);
console.log(tastingNotes);