//1. Creating an Array

//1.1. Empty Array
var emptyArray = [];

	console.log("Empty Array: " + emptyArray);
    console.log(`Empty Array: ${emptyArray}`);

    //Add items to an empty array:
    emptyArray[0] = "element1";
    emptyArray[1] = "element2";
    emptyArray[2] = "element3";
    emptyArray[3] = "element5";
    emptyArray[4] = "element6";
    emptyArray[5] = "element7";

    console.log("Empty Array with elements: " + emptyArray);


//1.2. An Array with values
var dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", 
    "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus", "Tyrannosaurus", 
    "Stegosaurus", "Nigersaurus", "Mosasaurus", "Giganotosaurus", "Brontosaurus"
    ];

	console.log("Array of Dinosaurs: " + dinosaurs);
 
//MyExamples:
var clothes = [
    "vest", "shirt", "jacket", "jumper", "pants", "belt",
    "scarf", "hat", "tee", "jersey", "hoodie", "sweater",
    "sneakers", "shoes", "boots", "sandals", "socks", "undie"
    ];
	console.log("Array of Clothes: " + clothes);
    console.log("Array of Clothes - length: " + clothes.length);

