//1. Creating an Array

//1.1. Empty Array
[];

//1.2. An Array with values
var dinosaurs = [
    "T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", 
    "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus", "Tyrannosaurus", 
    "Stegosaurus", "Nigersaurus", "Mosasaurus", "Giganotosaurus", "Brontosaurus"
    ];

    //Confirm:
    dinosaurs;
    console.log(`Dinosaurs: ${dinosaurs}`);
 
//2. Find a length of an Array
    dinosaurs.length;

    //Print out the length in console:
    console.log(dinosaurs.length);

//3. Accessing an Array’s Elements using Index
    dinosaurs[0]; //The first element

    dinosaurs[3]; //The fourth element

    dinosaurs[dinosaurs.length-1]; //The nth element

//4. Finding the Index of an Element in an Array: use arrayName.indexOf(elementName).

var colors = ["red", "green", "blue", "amber", "yellow", "black", "red"];

colors;

//array[index] returns elementName, arrayName.indexOf(elementName) uses elementName to find Index.

    //Index: arrayName[index]
    colors[2];

    //indexOf: arrayName.indexOf(elementName)
    colors.indexOf("blue");

    colors.indexOf("green");

    colors.indexOf("red"); //return the first index of that element in the array

    colors.indexOf("Stegosaurus"); //returns -1 --> element not part of array.

//Print Array in Console:
    console.log(dinosaurs);

//5. Setting or Changing Elements in an Array 
//5.1. Replace Element
dinosaurs[0] = "Tyrannosaurus Rex";

    //Confirm - view the Array:
    dinosaurs;

//5.2. Add new Element
dinosaurs.length;

dinosaurs[16] = "Disheresaur"

//add an element at any index
dinosaurs[22] = "Datheresaur"

    //Confirm - view the Array:
    dinosaurs;

//6. Mixing Data Types in an Array
var dinosaursAndNumbers = [
    3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10
    ];

//Access Mixed Data Types:
    //Access Nested Array:
    dinosaursAndNumbers[2];

    //Access an Element in nested Array
    dinosaursAndNumbers[2][2];

//Adding Elements to an Array
//1. Create an Empty Array:

[];

//2. Create an Array with elements:
var animals = [
    "Katse", "Ntja", "Nku", "Nare", "Noko", "Kgaka", "Thutlwa", "Kubu", "Kudu", "Tholo",
    "Tau", "Nkwe", "Pitse", "Phiri", "Phuti", "Koko", "Kwena", "Noga", "Tlou"
    ];

    //Confirm - view the Array:
    animals;
    animals.length;

//3. Add elements to an array
    //2.1 Add elements - arrayName.push(elementName); .push() method displays new Length
    animals.push("Alpaca");

    animals.push("Nku");

    animals.push("Kgaka");

        //Confirm - view the Array:
            animals;

    //2.2 Add element to the beginning of an array: arrayName.unshift(elementName); .unshift() method displays new Length

    animals.unshift("Guanaco");

    animals.unshift("Tlou");

            //Confirm - view the Array:
            animals;

            animals[0];

//3. Removing Elements from an Array 
//3.1. Remove last element:

    animals.pop();

    lastAnimal;

//3.1. Remove last element and store it in a variable:

    var lastAnimal = animals.pop();
    lastAnimal;

//Add element from Variable:

    animals.unshift(lastAnimal);

//4. Remove first element: use arrayName.shift():
animals;

//4.1. Remove first element:
    animals.shift();

//4.2. Remove first element and store it in a variable:

    var firstAnimal = animals.shift();
    firstAnimal;

    //Add element from Variable:

    animals.unshift(firstAnimal);

    animals;

//5. Adding Arrays: Use firstArray.concat(otherArray):
//5.1. Add 2 Arrays:
var fruits = [
    "Apple", "Banana", "Orange", "Berry", "pineapple"
    ];

    fruits;

 var veggies = [
    "Spinach", "Kale", "Cabbage", "Peas", "Beans"
    ];

    veggies;

    //Add Arrays:
    fruits.concat(veggies);

    //Concat and store in a new variable:
    var fruitsAndVeg = fruits.concat(veggies);

//5.2. Add multiple Arrays:

fruits;

veggies;

var nuts = [
    "Peanuts", "Pinenuts", "Almonds", "Cashews", "Pecans"
    ];

    nuts;

    var fruitsVegNuts = fruits.concat(veggies, nuts);

    fruitsVegNuts;

    fruits;

    veggies;

    nuts;

//6. Turning an Array into a String: arrayName.join(); joins elements in an array into a string.
    //Default seperator = comma.
    var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
    boringAnimals.join(); //"Monkey,Cat,Fish,Lizard"

    //Default separator = comma.
    var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
    boringAnimals.join(", "); //"Monkey,Cat,Fish,Lizard"

        // separator = hyphen.
        var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
        boringAnimals.join(" - "); //"Monkey - Cat - Fish - Lizard"

        //separator = space.
        var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
        myNames.join(" ");
        "Nicholas Andrew Maxwell Morgan"

        //Joining other data types - JS converts them to strings before joining them together:
        var ages = [11, 14, 79];
        ages.join(" "); //"11 14 79"

        var naturalNumbers = [3, 2, 1];
        naturalNumbers.join(" is bigger than "); 


//7. Using Math.random() and Math.floor() to create a random index.
    //7.1 Using Math.random(): returns a random number between 0 and 1 each time it’s called.

        //Math.random() always returns a number less than 1 and will never return 1 itself.
        Math.random();

        //If you want a bigger number, just multiply the result of calling Math.random().
        Math.random() * 10;

    //7.2. Rounding Down with Math.floor(): rounds number down to the whole number below it
        Math.floor(3.7463463); // 3
        Math.floor(9.9999); // 9
        Math.floor(0.793423451963426); // 0

    //7.3. Create a random index.
        //a. multiply Math.random() by the length of the array and then call Math.floor() on that value.

        Math.floor(Math.random() * 4); // could be 0, 1, 2, or 3

        //b. use random number as an index:
        var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
        var randomIndex = Math.floor(Math.random() * 4);
        randomWords[randomIndex];

        //OR even better
        var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
        var randomIndex = Math.floor(Math.random() * randomWords.length);
        randomWords[randomIndex];

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