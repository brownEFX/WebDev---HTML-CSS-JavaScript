//ARRAYS - FULL Example

//0. test

console.log("test");

var ping = "We are on";
console.log(ping + "!");
console.log(`Smoke Test: ${ping}`);

//1. Creating an Array

//1.1. Empty Array
var emptyArray = [];

	console.log("Empty Array: " + emptyArray);

    //Add items to an empty array:
    emptyArray[0] = "element1";
    emptyArray[1] = "element2";
    emptyArray[2] = "element3";
    emptyArray[3] = "element4";

    console.log("Empty Array with elements: " + emptyArray);
	
//2. Accessing an Array’s Elements using Index
console.log("Element at index[0]: " + emptyArray[0]); 
console.log("Index[n]: " + [emptyArray.length-1]); 
console.log("Element at Index[n]: " + emptyArray[emptyArray.length-1]); 
console.log("Index[2]: " + emptyArray[2]); 
console.log("indexOf('element3'): " + emptyArray.indexOf('element3')); // Expected output: 2
//Start from index 2 - arrayNm.indexOf('element', startFromIndex n));
console.log("indexOf('element3'), start at Index[n]: " + emptyArray.indexOf('element3', 2)); // Expected output: 4

//3. Setting or Changing Elements in an Array 
//3.1. Replace Element:
//Original element:
console.log("Element at index[0]: " + emptyArray[0]); //element1
//Replace Element:
emptyArray[0] = "element101";
//Updated element:
console.log("Element at updated index[0]: " + emptyArray[0]); //element101

//3.2. Add new Element:
emptyArray[4] = "element5";
emptyArray[5] = "element6";
emptyArray[6] = "element7";
emptyArray[7] = "element8";

//3.2. Add new Element at any index:
emptyArray[10] = "element9";
emptyArray[15] = "element10";

    //Confirm - view the Array:
    console.log("Array of emptyArray - updated index[0]: " + emptyArray[0]);
    console.log("Array of emptyArray: " + emptyArray);
    console.log("Array of emptyArray - length: " + emptyArray.length);
    console.log("Array of emptyArray - n - 2 Element: " + emptyArray[emptyArray.length-2]); //undefined
	console.log("Array of emptyArray - nth Element: " + emptyArray[emptyArray.length-1]); 
	
//4. Mixing Data Types in an Array:
// Recap:
var mixedDataTypes = [
    49, "noka", ["thaba", "maru", 33.33, [6, 12, 18, 24, "Day", "Night"]], 10, "Noon", "Evening"
    ];

    console.log("Mixed Data Types Array: " + mixedDataTypes);
    console.log("Length of Mixed Data Types Array: " + mixedDataTypes.length);
    console.log("Mixed Data Types Array [2]: " + mixedDataTypes[2]);
    console.log("Mixed Data Types Array [2][3]: " + mixedDataTypes[2][3]);
    console.log("Mixed Data Types Array [2][3][5]: " + mixedDataTypes[2][3][5]);
    console.log("mixedDataTypes[2][3].indexOf('Night'): " + mixedDataTypes[2][3].indexOf("Night")); //3
    console.log("mixedDataTypes[2][3].indexOf(24): " + mixedDataTypes[2][3].indexOf(24)); //3
//
emptyArray[5] = 1;
emptyArray[6] = 3;
emptyArray[7] = ['array1', 'array2', 247, 321];
emptyArray[8] = 411;
emptyArray[8] = "element9";

//Confirm:
console.log("Array of emptyArray: " + emptyArray); //['element1', 'element2', 'element3', 'element4', 'element5', 1, 3, "['array1', 'array2', 247, 321]", 'element9', empty, 'element9', empty × 4, 'element10']
console.log("Array of emptyArray - length: " + emptyArray.length);
console.log(emptyArray);
console.log("Mixed emptyArray Array [5]: " + emptyArray[5]); //1
console.log("Mixed emptyArray Array [7]: " + emptyArray[7]); //['array1', 'array2', 247, 321]
console.log("Mixed emptyArray Array [7][0]: " + emptyArray[7][0]); //247
console.log(emptyArray[7].indexOf(321)); //3

//5. Add Elements:
//5.1 Add elements to the end - arrayName.push(elementName); .push() method displays new Length
//Add a single element:
emptyArray.push("element11");

//Add multiple elements:
emptyArray.push("element12", "element13", "element12", ['array13', 231, 411, 365], 'array14', 'array15');

console.log("Array of emptyArray post-push(): " + emptyArray); 

//5.2 Add element to the beginning of an array: arrayName.unshift(elementName); .unshift() method displays new Length
//Add a single element:
emptyArray.unshift("element102");

//Add multiple elements:
emptyArray.unshift('element103',"['array113', 110, 121, 131]",'array123', 'ray554');

//Confirm - view the Array:
emptyArray;
console.log("Array of emptyArray: " + emptyArray);
console.log("Array of emptyArray - length: " + emptyArray.length);
console.log("Array of emptyArray - Element at index[0]: " + emptyArray[0]);
console.log("Array of emptyArray - nth Element: " + emptyArray[emptyArray.length-1]); 

//6. Removing Elements from an Array 
console.log("Array of emptyArray: " + emptyArray); 
//['element1', 'element2', 'element3', 'element4', 'element5', 1, 3, "['array1', 'array2', 247, 321]", 'element9', empty, 'element9', empty × 4, 'element10', 'element11', 'element12', 'element13', 'element12', "['array13', 231, 411, 365]", 'array14', 'array15']

    console.log("Array of emptyArray: " + emptyArray);
    console.log("Array of emptyArray - length: " + emptyArray.length);
	console.log("Array of emptyArray - index of nth Element: " + [emptyArray.length -1]);
	console.log("Array of emptyArray - nth Element: " + emptyArray[emptyArray.length-1]); 
	
//6.1. Remove last element:
emptyArray.pop();
console.log("Array of emptyArray - nth Element: " + emptyArray[emptyArray.length-1]); 

//6.1.1. Remove last element and store it in a variable:
var poppedElement = emptyArray.pop();
console.log("Popped Element: " + poppedElement);

	//Confirm pop();
		console.log("Array of emptyArray: " + emptyArray);
		console.log("Array of emptyArray - length: " + emptyArray.length);
		console.log("Array of emptyArray - index of nth Element: " + [emptyArray.length -1]);
		console.log("Array of emptyArray - nth Element: " + emptyArray[emptyArray.length-1]); 

	//Add element from Variable:
	   emptyArray.push(poppedElement); 
	   console.log("Element added from Variable: " + emptyArray[emptyArray.length-1]); 

//6.2. Remove first element: use arrayName.shift():
console.log("Array of emptyArray - index[0]: " + emptyArray[0]);
emptyArray.shift();
console.log("Array of emptyArray - new index[0]: " + emptyArray[0]);

//6.2. Remove first element and store it in a variable:

console.log("Array of emptyArray - index[0]: " + emptyArray[0]);
var shiftedElement = emptyArray.shift();
console.log("Shifted Element: " + shiftedElement);
console.log("Array of Element - new index[0]: " + emptyArray[0]);

//Add element from Variable:

emptyArray.unshift(shiftedElement);

console.log("Array of emptyArray: " + emptyArray);
console.log("Array of emptyArray - new index[0]: " + emptyArray[0]);

//7. Adding Arrays: Use firstArray.concat(otherArray):
var entityArray = ["entity101", "entity111", "entity121", "entity131", "entity141", "entity151"];

var attributes = ['attribute100','attribute110','attribute120']

//concat(); - 2 arrays
var concatTwo = emptyArray.concat(entityArray);
console.log("Two Concatenated Arrays: " + concatTwo);

//concat(); - 3 arrays
var concatThree = emptyArray.concat(entityArray, attributes);
console.log("Three Concatenated Arrays: " + concatThree);

//8. indexOf
console.log(emptyArray[0]); 
console.log(emptyArray[emptyArray.length-1]); 
console.log(emptyArray[2]); 
console.log(emptyArray.indexOf('element3')); // Expected output: 2
//Start from index 2 - arrayNm.indexOf('element', startFromIndex n));
console.log(emptyArray.indexOf('bison', 2)); // Expected output: 4

//9. Turning an Array into a String: arrayName.join(); joins elements in an array into a string.

console.log("Default separator = comma.");
console.log("Separator = default/comma: " + attributes.join());
console.log("Separator = space: " + attributes.join(" "));
console.log("Separator = string: " + attributes.join(", OR "));

//10. Turning an String into an Array: array.from ();Convert String into Array - Array.from()

var textString = ["entityAttributeArray"];
var thisStringArr = Array.from(textString);
console.log(thisStringArr);

//11. Math.floor and Math.random
//11.1. Using Math.random(): returns a random number between 0 and 1 each time it’s called.

//Math.random() always returns a number less than 1 and will never return 1 itself.
console.log("Math.random() always returns a number less than 1 and will never return 1 itself.");
console.log("Math.random: " + Math.random());

//If you want a bigger number, just multiply the result of calling Math.random().
//Math.random() * 10;
console.log("For a bigger number, multiply the result of calling Math.random().");
console.log("Math.random() * 10: " + Math.random() * 10);


//11.2. Rounding Down with Math.floor(): rounds number down to the whole number below it
console.log("Math.floor(): rounds number down to the whole number below it");
console.log("Math.floor(3.7463463): " + Math.floor(3.7463463)); // 3
console.log("Math.floor(9.9999): " + Math.floor(9.9999)); // 9
console.log("Math.floor(0.793423451963426): " + Math.floor(0.793423451963426)); // 0

//11.3. Random Index
//a. multiply Math.random() by the length of the array and then call Math.floor() on that value.

console.log("Math.floor(Math.random() * 4): " + Math.floor(Math.random() * 4)); // could be 0, 1, 2, or 3

//b. use random number as an index:
console.log("Array of attributes: " + attributes);
console.log("Array of attributes - length: " + attributes.length);
var randomIndex = Math.floor(Math.random() * attributes.length);
console.log("randomIndex: " + attributes);
console.log("attributes[randomIndex]: " + attributes[randomIndex]);

//OR even better
var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log("randomIndex: " + randomIndex);
console.log("randomWords[randomIndex]: " + randomWords[randomIndex]);
console.log("Array of emptyArray - index of nth Element: " + [emptyArray.length -1]);
console.log("Array of emptyArray - nth Element: " + emptyArray[emptyArray.length-1]); 
