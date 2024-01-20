//1. Creating an Array - with values
var dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", 
    "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus", "Tyrannosaurus", 
    "Stegosaurus", "Nigersaurus", "Mosasaurus", "Giganotosaurus", "Brontosaurus"
    ];

    //Confirm: Bracket Notation
    console.log(dinosaurs);
    console.log("Array of Dinosaurs: " + dinosaurs);
    console.log(`Array of Dinosaurs: ${dinosaurs}`);

//2. Accessing an Array’s Elements using Index
console.log(dinosaurs[0]); //T-Rex

console.log(dinosaurs[3]); //"Triceratops"

console.log(dinosaurs[dinosaurs.length-1]); //"Brontosaurus"

//4. Finding the Index of an Element in an Array: use arrayName.indexOf(elementName).

var colors = ["red", "green", "blue", "amber", "yellow", "black", "red"];
    //
    console.log("Array of colours: " + colors);
    //default start
    console.log(colors.indexOf('red')); // Expected output: 0
    //Start from index[4];
    console.log(colors.indexOf('red', 4)); // Expected output: 4



//array[index] returns elementName, arrayName.indexOf(elementName) uses elementName to find Index.

    //Index: arrayName[index]
    console.log(colors[2]);

    //indexOf: arrayName.indexOf(elementName) indexOf(searchElement) | indexOf(searchElement, fromIndex)
    console.log(colors.indexOf("blue"));

    console.log(colors.indexOf("green"));

    console.log(colors.indexOf("red")); //return the first index of that element in the array

    console.log(colors.indexOf("Stegosaurus")); //returns -1 --> element not part of array.


    var beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
    // Start from index 2
        console.log(beasts.indexOf('bison', 2)); // Expected output: 4
