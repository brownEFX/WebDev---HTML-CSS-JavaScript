//IndexOf:
var colors = ["red", "green", "blue", "white", "black", "green"];
console.log("Array of colors: " + colors);

console.log("IndexOf('blue'): " + colors.indexOf("blue"));
console.log("IndexOf('green'): " + colors.indexOf("green"));

//Index[n] vs indexOf
console.log(colors[4]); //"black"
console.log("IndexOf('black'): " + colors.indexOf('black'));

//Element not part of Array:
colors.indexOf("purple"); //-1

//Element appears more than once
colors.indexOf("IndexOf('green'): " + "green");

//MyExample:
//4. Add Elements
//4.1. Empty Array
var jsArray = [];

//4.2. Add Elements:

//4.2.1. Entire list
    jsArray[0] = "Create Array";
    jsArray[1] = "Add Elements";
    jsArray[2] = "Access Elements";
    jsArray[3] = "Set Elements";
    jsArray[4] = "Change Elements";
    jsArray[5] = "indexOf";
    jsArray[6] = "Strings and Numbers";
    jsArray[7] = "Push";
    jsArray[8] = "Unshift";
    jsArray[9] = "Pop";
    jsArray[10] = "Shift";
    jsArray[11] = "Concat Arrays";
    jsArray[12] = "Join Arrays";

    console.log(jsArray);
    console.log(`Array JS Topics: ${jsArray}`);
    console.log(jsArray.length);
    console.log("JavaScript Array length []: " + jsArray["length"]);
    console.log("JavaScript Array nth element: " + jsArray[jsArray.length-1]); //The nth element
    console.log("JavaScript Array 1st element: " + jsArray[0]); //The 1st element

    //Finding the Index of an Element in an Array: use arrayName.indexOf(elementName). indexOf(searchElement) | indexOf(searchElement, fromIndex)
    // indexOf(searchElement)
        console.log("IndexOf an element: " + jsArray.indexOf("Push")); // Expected output: 5

    // indexOf(searchElement, fromIndex) e.g. Start from index 2
        console.log("IndexOf an element with fromIndex: " + jsArray.indexOf("Pop", 4)); // Expected output: 9
        console.log("JavaScript Array nth element: " + jsArray[jsArray.length-1]); //The nth element