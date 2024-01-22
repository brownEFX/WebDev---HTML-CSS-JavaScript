//Arrays
//1. Creating an Array

var javascriptArray = ["Create Array", "Add Elements", "Access Elements", "Set Elements", "Change Elements", 
    "indexOf", "Strings and Numbers", "Push", "Unshift", "Pop", "Shift", "Concat Arrays", "Join Arrays"
    ];

	console.log(javascriptArray);
 

var htmlElement = [
    "body", "heading", "paragraph", "div", "hyperlink", "unordered list", "ordered list", 
    "table", "table row", "table header", "table data", "form", "label", "input",
    "textarea", "button", "select", "option", "optgroup", "fieldset", "output"
    ];
	console.log(htmlElement);

 //2. Add Elements
 //Empty Array:
    
    var htmlAttributes = [];

//Add Elements:

    htmlAttributes[0] = "Action";
    htmlAttributes[1] = "Async";
    htmlAttributes[2] = "Autocomplete";
    htmlAttributes[3] = "Autofocus";
    htmlAttributes[4] = "Checked";
    htmlAttributes[5] = "Disabled";
    htmlAttributes[6] = "Draggable";
    htmlAttributes[7] = "Formaction";
    htmlAttributes[8] = "Hidden";
    htmlAttributes[9] = "Maxlength";
    htmlAttributes[10] = "Novalidate";
    htmlAttributes[11] = "Onclick";
    htmlAttributes[12] = "Onsubmit";
    htmlAttributes[13] = "Readonly";
    htmlAttributes[14] = "Required";

    console.log("htmlAttributes array:" + htmlAttributes);

 //3. Access Elements

        htmlElement[0]; //The first element

        htmlElement[3]; //The fourth element
    
        htmlElement[htmlElement.length-1]; //The nth element
    

 //4. Set Elements
//Associative Array - Uses named key that you assign them
htmlElement[0] = "script";

//5.2. Add new Element
dinosaurs.push("Omegasaurus"); //To the end of an Array
animals.unshift("Kgaka"); //To the beginning of an Array

htmlElement[21] = "body"

//add an element at any index
htmlElement[22] = "meta"
console.log(htmlElement[22]);

 //5. Change Elements

 //6. indexOf
     //Index: arrayName[index]
     htmlElement[3];

     //indexOf: arrayName.indexOf(elementName)
     htmlElement.indexOf("div");

 //7. Mixing Data Types in an Array
var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];

//Access Nested Array:
    dinosaursAndNumbers[2];

//Access an Element in nested Array
    dinosaursAndNumbers[2][2];
 
 //8. Add Element to an Array:
 //Create array:
    var animals = ["Katse", "Ntja", "Nku", "Nare", "Noko", "Kgaka", "Thutlwa", "Kubu", "Kudu", "Tholo"];
    //"Tau", "Nkwe", "Pitse", "Phiri", "Phuti", "Koko", "Kwena", "Noga", "Tlou"

    //8.1. Push Add to the end: arrayName.push(elementName); .push() method displays new Length
    animals.push("Nkwe");
 
    //8.2. Unshift to add to the beginning: arrayName.unshift(elementName); .unshift() method displays new Length
    animals.unshift("Tlou");
 
 //9. Remove Element from an Array:
 //9.1. Pop Remove last element and store it in a variable:
 lastAnimal[lastAnimal.length-1]; //The nth element
 
    var lastAnimal = animals.pop();
    lastAnimal;
 
 //9.2. Shift Remove first element and store it in a variable:
    var firstAnimal = animals.shift();
    firstAnimal;
 
 //10. Concat Arrays
 //Create Arrays:
 var fruits = ["Apple", "Banana", "Orange", "Berry", "pineapple"];
 var veggies = ["Spinach", "Kale", "Cabbage", "Peas", "Beans"];
 var nuts = ["Peanuts", "Pinenuts", "Almonds", "Cashews", "Pecans"];

    //Add 2 Arrays: Concat and store in a new variable:
    var fruitsAndVeg = fruits.concat(veggies);

    //Add 3 or more Arrays: Concat and store in a new variable:
    var fruitsVegNuts = fruits.concat(veggies, nuts);
 
 //11. Turning an Array into a String: arrayName.join(); joins elements in an array into a string. 
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
        myNames.join(" "); //"Nicholas Andrew Maxwell Morgan"

        //Joining other data types - JS converts them to strings before joining them together:
        var ages = [11, 14, 79];
        ages.join(" "); //"11 14 79"

        var naturalNumbers = [3, 2, 1];
        naturalNumbers.join(" is bigger than "); 

//12. Using Math.random() and Math.floor() to create a random index.
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
        var randomWords = ["espouse", "eschew", "enthral", "encore"];
        //multiply Math.random() by the length of the array and then call Math.floor() on that value.
        var randomIndex = Math.floor(Math.random() * randomWords.length);


        //use random number as an index:
        console.log(randomIndex);

        console.log(randomWords[randomIndex]);   
        
        htmlElement.indexOf("div");

var names = ["Lil' Kim", "Lil' Wayne", "Lil' Bow-Wow"];

	console.log(names);
		
var boys  = ["Tumi", "Tshepo", "Pule", "Thabo", "Kabo"]

	console.log(boys);

var girls  = ["Kamo", "Lebo", "Nono", "Ntebo", "Lesego"]

	console.log(girls);

