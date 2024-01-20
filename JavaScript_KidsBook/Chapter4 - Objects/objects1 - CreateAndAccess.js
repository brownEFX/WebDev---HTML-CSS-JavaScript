//OBJECTS
//1. What?
/*
Objects use key-value pairs to access different elements
Key/Properties | values/elements | attributes/characteristics
*/

//2.Creating Objects
//Keys with quotes
var cat = {
    "legs": 4,
    "name": "Harmony",
    "color": "Tortoiseshell"
    };

    console.log(cat);

//Keys without quotes. Use quotes for keys with spaces
var cat = {
    legs: 3,
    "full name": "Harmony",
    color: "Tortoiseshell"
    };

    console.log(cat);
    //console.log("Cat object: " + cat);

//2. Accessing Values in Objects: objectName["key"] | objectName.key;
console.log(cat);

    //2.1. bracketNotation: objectName.key;
    cat["full name"];
    console.log("Cat Name - Bracket Notation: " + cat['full name']);
    console.log("Cat Color - Bracket Notation: " + cat['color']);

    //2.2. dotNotation: objectName.key;
    cat.color;
    console.log("Cat Name - Dot Notation: " + cat.color);

    cat.legs;
    console.log("Cat Name - Dot Notation: " + cat.legs);

//list of all the keys in an object. Object.keys(objectName);
console.log("Object.keys(anyObject) returns an array containing all the keys of anyObject.")

console.log("List all keys in an object - Object.keys(objectName): " + Object.keys(cat)); //Expected: ["name", "age", "color"]

//myExample:
var dog = { name: "Pancake", age: 6, color: "brown", bark: "Yip yap yip!" };

console.log(dog);

//Access Object:
console.log("Dog object - name: " + dog["name"]);
console.log("Dog object - bark: " + dog.bark);

//list of all the keys in an object. Object.keys(objectName);
console.log("List all keys in an object - Object.keys(objectName): " + Object.keys(dog)); //Expected: ["name", "age", "color", "bark"]

