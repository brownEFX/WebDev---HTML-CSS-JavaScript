//1. Mixing Data Types in an Array
var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];

   // console.log(dinosaursAndNumbers[2].indexOf(["triceratops", "stegosaurus", 3627.5]));


    console.log(dinosaursAndNumbers);
    console.log(`Array of Dinosaurs and Numbers: ${dinosaursAndNumbers}`);

    console.log(dinosaursAndNumbers.length);

//Access Mixed Data Types:
    //Access Nested Array:
    console.log(dinosaursAndNumbers[2]);

    //Access an Element in nested Array
    console.log(dinosaursAndNumbers[2][2]);

    console.log(dinosaursAndNumbers[2].indexOf("stegosaurus"));

    var mixedDataTypes = [
        49, "noka", ["thaba", "maru", 33.33, [6, 12, 18, 24, "Day", "Night"]], 10, "Noon", "Evening"
        ];

        console.log("Mixed Data Types Array: " + mixedDataTypes);
        console.log("Length of Mixed Data Types Array: " + mixedDataTypes.length);
        console.log("Mixed Data Types Array [2]: " + mixedDataTypes[2]);
        console.log("Mixed Data Types Array [2][3][5]: " + mixedDataTypes[2][3][5]);

        //MyExample: Random nested Array index:
        var randomIndex = Math.floor(Math.random() * mixedDataTypes[2][3].length);
        console.log(`mixedDataTypes[2][3] randomIndex: ${randomIndex}`);
        console.log("Element in mixedDataTypes[2][3][randomindex]: " + mixedDataTypes[2][3][Math.floor(Math.random() * mixedDataTypes[2][3].length)]);



        