//ARRAYS - FULL Example
//1. Creating an Array
//Strings
const people = ['patrick', 'chimamanda', 'joe', 'sam'];

console.log(people);

//Objects
const staff = [
    { name: "Nkwasu", age: 21 },
    { name: "Chimamanda", age: 25 },
    { name: "Tau", age: 22 },
    { name: "Itu", age: 26 },
    { name: "Kamo", age: 33 },
    { name: "Tshepo", age: 35 },
]

console.log(staff);

//2. Access Elements:
const cutlery = ['Teaspoon', 'Tablespoon', 'Fork', 'Knife', "Stake Knife"];

cutlery[0]; // 'Teaspoon'
cutlery[2]; // 'Fork'

//3. Setting or Changing Elements in an Array
//3.1. Replace Element
//Add
cutlery[5] = 'Sugarspoon';
cutlery[6] = 'Grapefruit Spoon';

//Replace
cutlery[6] = 'Soup Spoon';

cutlery[6]; //'Soup Spoon';

//3.2. Update Element(s):
cutlery[2]; // 'Knife'

cutlery[2] = "Table Knife";

cutlery[2]; // 'Table Knife'

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
    console.log(`JavaScript Array: ${jsArray}`);
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
 
//4.2.2 Add New Elements
    console.log(jsArray.length);
    
    //add an element at an existing index
    jsArray[14] = "anyElement"

    console.log("Any element at an existing index: " + jsArray[14]);

    //add an element at any index
    jsArray[20] = "AnotherElement"
    console.log("Element at a new existing index: " + jsArray[20]);
    //Confirm - view the Array:
    console.log(jsArray);
 
//4.2.2. Add elements end of the array - arrayName.push(elementName); .push() method displays new Length
    
    jsArray.push("Reverse");
    console.log("IndexOf push(Reverse): " + jsArray.indexOf("Reverse"));
	
//4.2.3. Add element to the beginning of an array: arrayName.unshift(elementName);

	jsArray.unshift("Concat", "Filter", "Slice", "Splice");
    console.log("IndexOf unshift(Concat): " + jsArray.indexOf("Concat"));

    //4. Set Elements
    //jsArray[['Create Array', 'Add Elements', 'Access Elements', 'Set Elements', 'Change Elements', 'indexOf', 'Strings and Numbers', 'Push', 'Unshift', 'Pop', 'Shift', 'Concat Arrays', 'Join Arrays']
    console.log("JavaScript Array as is: " + jsArray);

    jsArray[0] = "Create an Array";


//5. Removing Elements from an Array 
//5.1. Remove last element:
    console.log("JavaScript Array before pop: " + jsArray);
	
    //Remove last element and store it in a variable:
    var lastJSArray = jsArray.pop();

    console.log("Element from pop: " + lastJSArray);
    //Add element from Variable:

    jsArray.push(lastJSArray); 
    console.log("JavaScript Array with elements from lastElement: " + jsArray);
	
//5.2. Remove first element: use arrayName.shift():

    console.log("JavaScript Array before shift: " + jsArray);

    //Remove first element and store it in a variable:
    var firstJSArray = jsArray.shift();
    console.log("Element from shift: " + firstJSArray);

    //Add element from Variable:

    jsArray.unshift(firstJSArray);

    console.log(jsArray);

	//Add Elements back:

	jsArray.push("LastElement", "OneMoreElement", "AnotherElement"); //Adds element to the end of the array
	jsArray.unshift("FirstElement", "SecondElement"); //Adds element to the beginning of the array
    console.log("JavaScript Array with elements from first && lastElement: " + jsArray);

//6. Adding Arrays

var jsSmallArray = ['Create Array', 'Add Elements', 'Access Elements', 'Update Elements', 'Delete Elements']

var jsArrMeth = ['Concat', 'join()', 'findIndex', 'indexOf', 'isArray', 'toString']

var jsArrayMethods = jsSmallArray.concat(jsArrMeth);

console.log(jsArrayMethods);

//7. Turning an Array into a String

console.log(jsArrayMethods.join());

//5. Reverse an Array
const hardware = ['laptop', 'mouse', 'monitor', 'keyboard'];

let reversedHardware = hardware.reverse();
console.log(reversedHardware); //['keyboard', 'monitor', 'mouse', 'laptop']

//6. Check if a value exists in an array: use the includes() method.

console.log(hardware.includes('mouse')) // true 
console.log(hardware.includes('mic')) // false

//7. Remove and Replace Items With splice()
console.log(jsArray);
/*
splice(start: number, deleteCount?: number | undefined): (string | undefined)[]
The zero-based location in the array from which to start removing elements.
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
@returns — An array containing the elements that were deleted.
*/

//7.1. Update
//array.splice(index(position to add/remove items) , howmany(Number of items to be removed.), item1, ....., itemX (New elements(s) to be added))
jsArray.splice(0, 0, "Splice", "Slice", "Reduce"); //array.splice(index, howmany, item1, ....., itemX)

//Insert without deleting
jsArray.splice(0, 0, "find")
console.log(jsArray)

//7.2. Replace
//Delete 1 and Replace element in [0] with new element:
jsArray.splice(0, 1, "LastIndexOf");

//7.3. Delete:
//Delete 1 element in [0] :
jsArray.splice(0, 1);

//8. Mixing Data Types in an Array
var jsArrNumbers = [
    3, "variables", "objects", "functions", "arrays", ["push", "shift", "pop", "unshift", 1234, 3627.5], 10
    ];

    console.log("JSandNumbers array: " + jsArrNumbers);

    console.log("JSandNumbers length: " + jsArrNumbers.length);

//Access Mixed Data Types:
    //Access Nested Array:
    console.log("Element at index [2]: " + jsArrNumbers[2]); //"objects"
	
	//Access nested array
	console.log("Element at index [5]: " + jsArrNumbers[5]); //["push", "shift", "pop", "unshift", 1234, 3627.5]

    //Access an Element in nested Array
    console.log("Element at index [5][2]: " + jsArrNumbers[5][2]); //"pop"

    console.log("Element at index [5][2]: " + jsArrNumbers[5].indexOf("pop")); //[2]

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


//MathRandom
    var randomWords = ["Explosion", "Cave", "Princess", "Pen"];
    var randomIndex = Math.floor(Math.random() * randomWords.length);
    console.log("The Random Index is: " + [randomIndex]);
    console.log("Element in Random Index is: " +randomWords[randomIndex]);

//jsArray['Create Array', 'Add Elements', 'Access Elements', 'Set Elements', 'Change Elements', 'indexOf', 'Strings and Numbers', 'Push', 'Unshift', 'Pop', 'Shift', 'Concat Arrays', 'Join Arrays']
    
    var randomJSArrInd = Math.floor(Math.random() * jsArray.length);

    console.log("The Random Index from jsArray is: " + [randomJSArrInd]);
    console.log("Element in Random Index from jsArray is: " +jsArray[randomJSArrInd]);

