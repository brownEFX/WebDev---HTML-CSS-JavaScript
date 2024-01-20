//1.  Create an array
var dinosaurs = [
    "T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", 
    "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus", "Tyrannosaurus", 
    "Stegosaurus", "Nigersaurus", "Mosasaurus", "Giganotosaurus", "Brontosaurus",
    'Tausaurus','Alphasaurus','Betaasaurus','Gammasaurus','Deltasaurus','Zetasaurus'
    ];

    dinosaurs;
    console.log("Array of Dinosaurs: " + dinosaurs)
    console.log(`Array of Dinosaurs: ${dinosaurs}`);
    console.log("Array of Dinosaurs - length: " + dinosaurs.length);
    console.log("Array of Dinosaurs - index[n]: " + [dinosaurs.length -1]);
    console.log("Array of Dinosaurs - Element at index[n]: " + dinosaurs[dinosaurs.length -1]);

//2. Removing Elements from an Array 
//2.1. Remove last element:
dinosaurs.pop();
console.log("Array of Dinosaurs - length: " + dinosaurs.length);
console.log("Array of Dinosaurs - index[n]: " + [dinosaurs.length -1]);
console.log("Array of Dinosaurs - Element at index[n]: " + dinosaurs[dinosaurs.length -1]);

//2.1.1. Remove last element and store it in a variable:
var lastDinosaur = dinosaurs.pop();
console.log("Popped dinosaur: " + lastDinosaur);

dinosaurs;
console.log("Array of Dinosaurs: " + dinosaurs)
console.log("Array of Dinosaurs - length: " + dinosaurs.length);
console.log("Array of Dinosaurs - index[n]: " + [dinosaurs.length -1]);
console.log("Array of Dinosaurs - Element at index[n]: " + dinosaurs[dinosaurs.length -1]);

    //Add element from Variable:
    dinosaurs.push(lastDinosaur); 
    console.log("Element added from Variable: " + dinosaurs[dinosaurs.length -1]);

//2.2. Remove first element: use arrayName.shift():
console.log("Array of Dinosaurs - index[0]: " + dinosaurs[0]);
dinosaurs.shift();
console.log("Array of Dinosaurs - new index[0]: " + dinosaurs[0]);

//4.2. Remove first element and store it in a variable:

console.log("Array of Dinosaurs - index[0]: " + dinosaurs[0]);
var firstDinosaur = dinosaurs.shift();
console.log("Shifted dinosaur: " + firstDinosaur);
console.log("Array of Dinosaurs - new index[0]: " + dinosaurs[0]);

//
var firstDinosaurArr = [dinosaurs.shift()];
console.log("Shifted dinosaur: " + firstDinosaurArr);
//
firstDinosaurArr.unshift([dinosaurs.shift()]);
console.log("Shifted dinosaur: " + firstDinosaurArr);

//Add element from Variable:

dinosaurs.unshift(firstDinosaur);

console.log("Array of Dinosaurs: " + dinosaurs)
console.log("Array of Dinosaurs - new index[0]: " + dinosaurs[0]);

/*
//JS4K Example
//Add Elements back:

animals.push("Alpaca"); //Adds element to the end of the array
animals.unshift("Guanaco"); //Adds element to the beginning of the array

console.log("Array of Dinosaurs: " + dinosaurs)

var animals = ["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]

    //Confirm - view the Array:
    console.log(animals);
        console.log(animals.length);

//2. Add Elements
//2.1 Add elements - arrayName.push(elementName); .push() method displays new Length

    animals.push("Alpaca"); //Adds element to the end of the array
    animals.unshift("Guanaco"); //Adds element to the beginning of the array

    //Confirm - view the Array:
        console.log(animals);
            console.log(animals.length);
                console.log(animals[animals.length-1]); //The nth element
                console.log(animals[0]); //The nth element

//3. Removing Elements from an Array 
//3.1. Remove last element:

console.log(animals);

    animals.pop();
        console.log(animals);

//3.1. Remove last element and store it in a variable:

    var lastAnimal = animals.pop();
    
    //Confirm:
    console.log(lastAnimal);
    console.log(animals);

//Add element from Variable:

    animals.push(lastAnimal); 
    console.log(animals);

//4. Remove first element: use arrayName.shift():
//4.1. Remove first element: arrayName.shift();
    animals.shift();

//4.2. Remove first element and store it in a variable:

    var firstAnimal = animals.shift();
    console.log(firstAnimal);

    //Add element from Variable:

    animals.unshift(firstAnimal);

    console.log(animals);

//Add Elements back:

animals.push("Alpaca"); //Adds element to the end of the array
animals.unshift("Guanaco"); //Adds element to the beginning of the array

console.log(animals);

*/