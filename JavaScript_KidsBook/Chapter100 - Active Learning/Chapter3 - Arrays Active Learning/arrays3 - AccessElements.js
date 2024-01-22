//1. Creating an Array - with values
//https://www.nhm.ac.uk/discover/dino-directory/name/c/gallery.html
var dinosauria = [
    "Abelisaurus", "Acrocanthosaurus", "Agilisaurus", "Albertosaurus", "Alectrosaurus",
    "Bactrosaurus", "Barapasaurus","Barosaurus", "Bellusaurus", "Brachiosaurus",
    "Camarasaurus","Camptosaurus","Carnotorus","Chasmosaurus","Chindesaurus",
    ];

    //Confirm: Bracket Notation
    console.log(dinosauria);
 
//2. Find a length of an Array
    dinosauria.length;

    //Print out the length in console:
    console.log(dinosauria.length);

//3. Accessing an Array’s Elements using Index
console.log(dinosauria[0]); //The first element

console.log(dinosauria[3]); //The fourth element

console.log(dinosauria[dinosauria.length-1]); //The nth element

//4. Finding the Index of an Element in an Array: use arrayName.indexOf(elementName).

var colors = ["red", "green", "blue", "amber", "yellow", "black", "red"];

console.log(colors.indexOf('red', 4)); // Expected output: 4

console.log(colors);

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
