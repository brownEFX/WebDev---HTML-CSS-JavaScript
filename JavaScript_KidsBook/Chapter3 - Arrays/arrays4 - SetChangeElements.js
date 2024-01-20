//1. Setting or Changing Elements in an Array 
var dinosaurs = [
    "T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", 
    "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus", "Tyrannosaurus", 
    "Stegosaurus", "Nigersaurus", "Mosasaurus", "Giganotosaurus", "Brontosaurus"
    ];
    
console.log(dinosaurs);
console.log(`Array of Dinosaurs: ${dinosaurs}`);

//5.1. Replace Element
//Associative Array - Uses named key that you assign them
dinosaurs[0] = "Tyrannosaurus Rex";

    //Confirm - view the Array:
    console.log("Array of Dinosaurs - updated index[0]: " + dinosaurs[0]);
    console.log("Array of Dinosaurs: " + dinosaurs);
    console.log("Array of Dinosaurs - length: " + dinosaurs.length);

//5.2. Add new Element
console.log("Array of Dinosaurs - length: " + dinosaurs.length);

dinosaurs[15] = "Tausaurus"
dinosaurs[16] = "Alphasaurus"
dinosaurs[17] = "Betaasaurus"
dinosaurs[18] = "Gamasaurus"
dinosaurs[19] = "Deltasaurus"
dinosaurs[20] = "Zetasaurus"

console.log(dinosaurs);
console.log("Array of Dinosaurs: " + dinosaurs);
console.log("Index[16]: " + dinosaurs[16]);

//add an element at any index
dinosaurs[32] = "Indexsaurus"
console.log(dinosaurs[32]);
    //Confirm - view the Array:
    console.log(dinosaurs);

