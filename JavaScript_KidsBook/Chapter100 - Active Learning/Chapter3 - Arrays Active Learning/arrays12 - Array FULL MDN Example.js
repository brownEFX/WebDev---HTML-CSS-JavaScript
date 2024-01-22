//1. MDN - Creating an Array
//MDN - Arrays - Strings
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log("Array of Strings - Shopping: " + shopping);
console.log("Array of Strings - Shopping - Length: " + shopping.length);
console.log("Shopping - Index[0]: " + shopping[0]); //bread

//MDN - Arrays - Numbers
const sequence = [1, 1, 2, 3, 5, 8, 13];
console.log("Array of Numbers - Sequence: " + sequence);
console.log("Array of Numbers - Sequence - Length: " + sequence.length);
console.log("Sequence - Index[0]: " + sequence[1]); //1

//MDN - Arrays - Strings, Numbers & Arrays - Multidimensional
const stringsNumbersArrays = ["tree", 795, [0, 1, 2,5,9,13]];
console.log("Array of Strings, Numbers and Arrays - Sequence: " + stringsNumbersArrays);
console.log("Array of Strings, Numbers and Arrays - Sequence - Length: " + stringsNumbersArrays.length);
console.log("Array of Strings, Numbers and Arrays - Sequence - Length: " + stringsNumbersArrays[2].length);

//2. Accessing and modifying array items
console.log("Array of Strings - Shopping: " + shopping);
//Access:
console.log("Array of Strings - Shopping - Index[0]: " + shopping[0]);
//Add Element:
shopping[5] = 'tahini';
//Modify Element:
shopping[5] = 'quinoa';
console.log("Array of Strings - Shopping - Index[5]: " + shopping[5]);

//3. Accessing every item - using the for...of statement:
var cities = ["London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Cardiff", "Bradford", "Brighton", "Bristol", "Edinburgh", "Shefield", "Bristol",
"Portsmouth", "Doncaster", "Reduce","Peterborough", "Cambridge", "Hastings", "Carlisle"];

for (const city of cities) {
    console.log(city);
  }

    //MyExample: Accessing every item - using the for...of statement:
    const accounts = ["savings", "cheque", "credit"];

    for (const account of accounts) {
      console.log(account);
    }

//4. Doing the same thing to each element in an array using map():
/*
We give a function to the map(), and map() calls the function once for each item in the array, passing in the item. 
It then adds the return value from each function call to a new array, and finally returns the new array.
*/
function double(number) {
    return number * 2;
  }
  const numbers = [5, 2, 7, 6];
  const doubled = numbers.map(double);
  console.log(doubled); // [ 10, 4, 14, 12 ]

//5. Filter Array - filter(): to create a new array containing only the items in the original array that match some test.
function isLong(city) {
    return city.length > 7;
  }
  //cities = ["London", "Liverpool", "Totnes", "Edinburgh"];
  const longer = cities.filter(isLong);
  console.log(longer); // [ "Liverpool", "Edinburgh" ]

//3. Setting or Changing Elements in an Array
//3.1. Modify Element
//Add
shopping[5] = "quinoa";
shopping[6] = "feta";
shopping[7] = "haloumi";
shopping[8] = "kale";
shopping[9] = "chickpea"
shopping[10] = "soybeans"

//Replace
shopping[10] = "edamame"
shopping[10];

//3.2. Update Element(s):
shopping[10];

shopping[10] = "edamame beans";

//4. Access Elements
const randomMix = ["creed", 325, [3, 2, 1]];
console.log("randomMix index[2][2]: " + randomMix[2][2]);
//Note that an array inside an array is called a multidimensional array
const multidimensionalArray = ["chair", "bench", ["bed", "pedastal", "headboard"], 112, 247, [247, 411, 2020], "mirror"];
console.log("multidimensionalArray index[5][1]: " + multidimensionalArray[5][1]);

//5. IndexOf
const birds = ["Parrot", "Falcon", "Owl"];

//Add Elements:
birds[3] = "hummingbird";
birds[4] = "penguin";
birds[5] = "finch";
birds[6] = "pelican";
birds[7] = "swallow"
birds[8] = "kingfisher"

//Find index of an element:
console.log(birds.indexOf("kingfisher")); //8
console.log(birds.indexOf("Rabbit")); // -1

//6. Adding items
//6.1. To add an item to the end of the array .push()
cities = ["London", "Birmingham", "Manchester", "Leeds", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log("UK cities: " + cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

    //store the new array length in a variable
    const newLength = cities.push("Bristol");
    console.log("UK cities: " + cities);
    console.log("Array length: " + newLength);

//6.2. To add an item to the start of the array .unshift()
cities.unshift("Edinburgh");
console.log("UK cities: " + cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

cities.unshift("Shefield", "Bristol");
console.log("UK cities: " + cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

//7. Removing Items:
//7.1. To remove the last item from the array: pop().
console.log("Cities nth element: " + cities[cities.length - 1]);

var poppedCity = cities.pop();
console.log("Popped element from Cities Array: " + poppedCity);

console.log("Cities nth element: " + cities[cities.length - 1]);

//7.2. To remove the first item from the array: shift().
console.log("Cities first element: " + cities[0]);

var shiftCity = cities.shift();
console.log("Shifted element from Cities Array: " + shiftCity);

//7.3 To remove the element using index: splice().
//The splice() change array contents by removing or replacing existing elements and/or adding new elements
//array.splice(index(position to add/remove items) , howmany(Number of items to be removed.), item1, ....., itemX (New elements(s) to be added))

//Remove all elements:
cities.splice(0, 10);

cities.splice(0, 0, "London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Cardiff", "Bradford", "Brighton", "Bristol", "Edinburgh", "Shefield", "Bristol",
"Portsmouth", "Doncaster", "Reduce","Peterborough", "Cambridge", "Hastings");

console.log("UK cities Array length: " + cities.length);
console.log("Cities nth element: " + cities[cities.length - 1]);
console.log("UK cities: " + cities);
console.log(cities);

//Index is known:

//Remove element at index[17];
//Find index of an element:
cities.splice(0, 18);
console.log("Uk Cities: " + cities);

cities.splice(0, 0, "London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Cardiff", "Bradford", "Brighton", "Bristol", "Edinburgh", "Shefield", "Bristol",
"Portsmouth", "Doncaster", "Reduce","Peterborough", "Cambridge", "Hastings");


console.log("IndexOf 'Hastings': " + cities.indexOf("Hastings")); //8
console.log(cities.indexOf("Jozi")); //

//Remove one element:
cities.splice(17, 1); //array.splice(index, howmany)
console.log("IndexOf 'Hastings': " + cities.indexOf("Hastings")); 


//Remove multiple element:
console.log(cities[cities.length - 4]);
cities.splice([cities.length - 4], 3); //array.splice(index, howmany)
console.log("Uk Cities: " + cities);
console.log(cities);

cities.splice(0, 18);
console.log("Uk Cities: " + cities);

cities.splice(0, 0, "London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Cardiff", "Bradford", "Brighton", "Bristol", "Edinburgh", "Shefield", "Bristol",
"Portsmouth", "Doncaster", "Reduce","Peterborough", "Cambridge", "Hastings", "Carlisle");

console.log("Uk Cities length: " + cities.length);
console.log("Uk Cities: " + cities);

console.log("Index[cities.length - 3]: " + cities[cities.length - 3]);
console.log("Index[cities.length - 3]: " + [cities.length - 3]);

var splicedCities = cities.splice([cities.length - 3], 3);
console.log(splicedCities);
console.log("Spliced Uk Cities: " + splicedCities);

console.log("Uk Cities length: " + cities.length);
console.log("Uk Cities: " + cities);
console.log(cities);

console.log("UK cities: " + cities);
cities.splice(0, 35);
cities.splice(0, 0, "London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Cardiff", "Bradford", "Brighton", "Bristol", "Edinburgh", "Shefield", "Bristol",
"Portsmouth", "Doncaster", "Reduce","Peterborough", "Cambridge", "Hastings", "Carlisle"); //array.splice(index, howmany, item1, ....., itemX)

console.log(cities);
console.log("UK cities: " + cities);
console.log(cities[18]);
console.log("IndexOf 'Hastings': " + cities.indexOf("Hastings")); 

const index = cities.indexOf("Reduce");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

//8. Converting between strings and arrays - split string using split()
const data = "Manchester, London, Liverpool, Birmingham, Leeds, Carlisle";
const ukCities = data.split(",");
console.log(ukCities);
console.log("Split ukCities: " + ukCities);

    //Access Array:
    console.log("Cities - Array Length: " + cities.length);
    console.log("Cities - Index[0]: " + cities[0]); // the first item in the array
    console.log("Cities - Index[1]: " + cities[1]); // the second item in the array
    console.log("Cities - Index[n]: " + [cities.length - 1]); // the last item in the array
    console.log("Cities - Element at Index[n]: " + cities[cities.length - 1]); // the last item in the array

//8. Converting between strings and arrays - join()

const commaSeparated = ukCities.join(",");
console.log(commaSeparated);

let names = ["Kabo", "Rizz", "Matazz"];
let myNames = names.join(" ");
console.log(myNames);

let firstNames = "Kabo, Rizz, Matazz";
let namesList = firstNames.split(",");
console.log(namesList);

//9. Converting an array to a string is to use the toString() - uses a comma
console.log(cities);
console.log("Joined cities: " + cities.join(", then "));
console.log("toString cities: " + cities.toString());