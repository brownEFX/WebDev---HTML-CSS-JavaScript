var mathRandom = Math.random();
console.log(`Math Rando ${mathRandom}`);

//1. Using Math.random() and Math.floor() to create a random index.
    //7.1 Using Math.random(): returns a random number between 0 and 1 each time it’s called.

        //Math.random() always returns a number less than 1 and will never return 1 itself.
        console.log("Math.random() always returns a number less than 1 and will never return 1 itself.");
        console.log("Math.random: " + Math.random());

        //If you want a bigger number, just multiply the result of calling Math.random().
        //Math.random() * 10;
        console.log("For a bigger number, multiply the result of calling Math.random().");
        console.log("Math.random() * 10: " + Math.random() * 10);

    //7.2. Rounding Down with Math.floor(): rounds number down to the whole number below it
    console.log("Math.floor(): rounds number down to the whole number below it");
        console.log("Math.floor(3.7463463): " + Math.floor(3.7463463)); // 3
        console.log("Math.floor(9.9999): " + Math.floor(9.9999)); // 9
        console.log("Math.floor(0.793423451963426): " + Math.floor(0.793423451963426)); // 0

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
        var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
        var randomIndex = Math.floor(Math.random() * randomWords.length);
        console.log("randomIndex: " + randomIndex);
        console.log("randomWords[randomIndex]: " + randomWords[randomIndex]);


//Just Vibezzz
var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
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

//var randomIndex = Math.floor(Math.random() * randomWords.length);
//var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

