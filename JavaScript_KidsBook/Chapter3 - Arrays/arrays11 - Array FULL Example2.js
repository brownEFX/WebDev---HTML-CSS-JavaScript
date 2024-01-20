//ARRAYS - FULL Example
//1. Creating an Array

//1.1. Empty Array
var javascriptArray = [];

	console.log("Empty JavaScript Array: " + javascriptArray);
    console.log(`Empty JavaScript Array: ${javascriptArray}`);

//1.2. An Array with values
var javascriptArray = ["Create Array", "Add Elements", "Access Elements", "Set Elements", "Change Elements", 
    "indexOf", "Strings and Numbers", "Push", "Unshift", "Pop", "Shift", "Concat Arrays", "Join Arrays"
    ];

	console.log("JavaScript Array with elements: " + javascriptArray);
 
//1.3. length
	console.log("JavaScript Array .length(): " + javascriptArray.length);
 
	console.log("JavaScript Array length [] " + javascriptArray["length"]);

//Confirm - view the Array:
	console.log(javascriptArray);
		console.log("JavaScript Array .length(): " + javascriptArray.length);
			console.log("JavaScript Array nth element: " + javascriptArray[javascriptArray.length-1]); //The nth element
			console.log("JavaScript Array 1st element: " + javascriptArray[0]); //The 1st element

//Finding the Index of an Element in an Array: use arrayName.indexOf(elementName). indexOf(searchElement) | indexOf(searchElement, fromIndex)
// indexOf(searchElement)
	console.log("IndexOf an element: " + javascriptArray.indexOf("indexOf")); // Expected output: 5

// indexOf(searchElement, fromIndex) e.g. Start from index 2
	console.log("IndexOf an element with fromIndex: " + javascriptArray.indexOf("indexOf", 4)); // Expected output: 5
 
 
//2. Add Elements
//2.1 Add elements - arrayName.push(elementName); .push() method displays new Length
    
    javascriptArray.push("Length");
    console.log("IndexOf push(Length): " + javascriptArray.indexOf("Length"));
	
//2.2 Add element to the beginning of an array: arrayName.unshift(elementName);

	javascriptArray.unshift("Length");
    console.log("IndexOf unshift(Length): " + javascriptArray.indexOf("Length"));

//3. Removing Elements from an Array 
//3.1. Remove last element:
    console.log("JavaScript Array before pop: " + javascriptArray);
    javascriptArray.pop();
    console.log("JavaScript Array after pop: " + javascriptArray);
		
	//Remove last element and store it in a variable:

    var lastElement = javascriptArray.pop();
    console.log("Element from pop: " + lastElement);
    //Add element from Variable:

    javascriptArray.push(lastElement); 
    console.log("JavaScript Array with elements from lastElement: " + javascriptArray);
	
//3.2. Remove first element: use arrayName.shift():
//Remove first element: arrayName.shift();

    console.log("JavaScript Array before shift: " + javascriptArray);
    javascriptArray.shift();
    console.log("JavaScript Array after shift: " + javascriptArray);

//Remove first element and store it in a variable:

    var firstElement = javascriptArray.shift();
    console.log("Element from shift: " + firstElement);

    //Add element from Variable:

    javascriptArray.unshift(firstElement);

    console.log("JavaScript Array with elements from firstElement: " + javascriptArray);

	//Add Elements back:

	javascriptArray.push("LastElement"); //Adds element to the end of the array
	javascriptArray.unshift("FirstElement"); //Adds element to the beginning of the array
    console.log("JavaScript Array with elements from first && lastElement: " + javascriptArray);
	
//4. Set Elements

    console.log("JavaScript Array as is: " + javascriptArray);

//4.1. Replace/Update element

	javascriptArray[0] = "Create an Array";

//4.2. Add new Element
	console.log(javascriptArray.length);

	javascriptArray[13] = "anyElement"

	console.log("Any element at an existing index: " + javascriptArray[13]);
	
	//add an element at any index
	javascriptArray[15] = "AnotherElement"
	console.log("element at a new existing index: " + javascriptArray[50]);
	//Confirm - view the Array:
	console.log(javascriptArray);

//5. Mixing Data Types in an Array
var jsAndNumbers = [
    3, "variables", "objects", "functions", "arrays", ["push", "shift", "pop", "unshift", 1234, 3627.5], 10
    ];

    console.log("JSandNumbers array: " + jsAndNumbers);

    console.log("JSandNumbers length: " + jsAndNumbers.length);

//Access Mixed Data Types:
    //Access Nested Array:
    console.log("Element at index [2]: " + jsAndNumbers[2]); //"objects"
	
	//Access nested array
	console.log("Element at index [5]: " + jsAndNumbers[5]); //["push", "shift", "pop", "unshift", 1234, 3627.5]

    //Access an Element in nested Array
    console.log("Element at index [5][2]: " + jsAndNumbers[5][2]); //"pop"

    console.log("Element at index [5][2]: " + jsAndNumbers[5].indexOf("pop")); //[2]

//Access Mixed Data Types: - My Example:
    var mixedDataTypes = [
        49, "noka", ["thaba", "maru", 33.33, [6,12,18,24, "Day", "Night"]], 10, "Noon", "Evening"
        ];

    //console.log(dinosaursAndNumbers[2].indexOf(["triceratops", "stegosaurus", 3627.5]));


    var mixedDataTypes = [
        49, "noka", ["thaba", "maru", 33.33, [6, 12, 18, 24, "Day", "Night"]], 10, "Noon", "Evening"
        ];

        console.log("Mixed Data Types Array: " + mixedDataTypes);
        console.log("Length of Mixed Data Types Array: " + mixedDataTypes.length);
        console.log("Mixed Data Types Array [2]: " + mixedDataTypes[2]);
        console.log("Mixed Data Types Array [2][3][5]: " + mixedDataTypes[2][3][5]);

//6. Turning an Array into a String: arrayName.join();

var whatsThis = ["This", "is", "an", "array"];
        console.log(whatsThis.join(" ")); //"This is an array"

var naturalNumbers = [3, 2, 1];
        console.log(naturalNumbers.join(" is bigger than ") + "."); 
