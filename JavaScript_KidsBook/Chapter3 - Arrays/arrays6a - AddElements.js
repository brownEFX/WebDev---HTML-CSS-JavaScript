//1. Creating an Array with values
var dinosaurs = [
    "T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", 
    "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus", "Tyrannosaurus", 
    "Stegosaurus", "Nigersaurus", "Mosasaurus", "Giganotosaurus", "Brontosaurus"
    ];

    //Confirm:
    console.log("Array of Dinosaurs: " + dinosaurs);
    console.log(`Array of Dinosaurs: ${dinosaurs}`);
    console.log("Array of Dinosaurs - length: " + dinosaurs.length);

//3. Add elements to an array
    //2.1 Add elements to the end - arrayName.push(elementName); .push() method displays new Length
    //Add a single element:
    dinosaurs.push("Omegasaurus");

    //Add multiple elements:
    dinosaurs.push('Tausaurus','Alphasaurus','Betaasaurus');

    //Confirm - view the Array:
            dinosaurs;
            console.log("Array of Dinosaurs - length: " + dinosaurs.length);
            console.log("Array of Dinosaurs - index[n]: " + [dinosaurs.length -1]);
            console.log("Array of Dinosaurs - Element at index[n]: " + dinosaurs[dinosaurs.length -1]);

    //2.2 Add element to the beginning of an array: arrayName.unshift(elementName); .unshift() method displays new Length

    //Add a single element:
    dinosaurs.unshift("Phisaurus");

    //Add multiple elements:
    dinosaurs.unshift('Gammasaurus','Deltasaurus','Zetasaurus');

    //Confirm - view the Array:
    dinosaurs;
    console.log("Array of Dinosaurs: " + dinosaurs);
    console.log("Array of Dinosaurs - length: " + dinosaurs.length);
    console.log("Array of Dinosaurs - Element at index[0]: " + dinosaurs[0]);

/*


//MyExample
var animals = [
    "Katse", "Ntja", "Nku", "Nare", "Noko", "Kgaka", "Thutlwa", "Kubu", "Kudu", "Tholo",
    "Tau", "Nkwe", "Pitse", "Phiri", "Phuti", "Koko", "Kwena", "Noga", "Tlou"
    ];
    
    //Confirm - view the Array:
    console.log("Array of Animals: " + animals);
        //Dot Notation
        console.log("Array length - dot notation: " + animals.length);
        //Bracket Notation
        console.log("Array length - bracket notation: " + animals["length"]);
        */