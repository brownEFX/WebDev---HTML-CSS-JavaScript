//Months array:
var months = [];
console.log("Months: " + months);

//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
//array.splice(index(position to add/remove items) , howmany(Number of items to be removed.), item1, ....., itemX (New elements(s) to be added))

var meat = ["chicken", "lamb", "beef"]
console.log("Meat: " + meat)
//Insert element at index[1]:
    meat.splice(1, 0, 'fish');
    console.log("Meat: " + meat);
//Insert element at index[0]:
    meat.splice(0, 0, 'duck');
    console.log("Meat: " + meat);
//Insert multiple elements at index[0]:
meat.splice(0, 0, 'turkey', 'goose', 'rabbit', 'veal', 'game');
    console.log(meat);
    console.log("Meat: " + meat);
    console.log("Meat length: " + meat.length);

//Remove element at index 0
meat.splice(1, 1); // Removes 1 at Index 1
console.log(meat);

//Remove multiple elementss at index 1
meat.splice(1, 3); // Removes 1 at Index 1
console.log(meat);

//Add multiple elements at index[0]:
meat.splice(0, 0, 'goose', 'rabbit', 'veal', 'game');
    console.log(meat);
    console.log("Meat: " + meat);
    console.log("Meat length: " + meat.length);

//Remove all:
meat.splice(0, 10); // Removes 1 at Index 1
console.log(meat);

//Add back:
meat.splice(0,0,'turkey', 'goose', 'rabbit', 'veal', 'game', 'duck', 'chicken', 'fish', 'lamb', 'beef');
console.log(meat);
console.log("Meat: " + meat);

//Remove all and add new elements:
meat.splice(0, 10,'turkey', 'goose', 'rabbit', 'veal', 'game', 'duck', 'chicken', 'fish', 'lamb', 'beef'); // Removes 1 at Index 1
console.log(meat);

//
console.log("indexOf('lamb'): " + meat.indexOf("lamb"));
meat.splice(8, 1, 'lamb or mutton')

console.log("Index[n]: " + meat[meat.length - 1]);

//Insert element at index 0
months.splice(1, 0, 'Jan', 'Feb', 'Mar'); // Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

console.log("index [0]: " + months[0]);
months.splice(0, 1, 'January'); // Replaces 1 element at index 0
console.log("New elements at index [0]: " + months[0]); // Expected output: Array ["Jan", "Feb", "March", "April", "May"]
months.splice(1, 1, 'February'); // Replaces 1 element at index 1
console.log("New elements at index [1]: " + months[1]);
months.splice(2, 1, 'March'); // Replaces 1 element at index 2
console.log("New elements at index [1]: " + months[2]);

//Insert element at index 0
months.splice(3, 3); // Inserts at index 1
console.log(months);


//Remove element at index 0
months.splice(3, 3); // Inserts at index 1
console.log(months);

//Cities Array
let cities = [
    "London", "Birmingham", "Manchester", "Liverpool", "Leeds",  "Shefield", "Teesside", "Bristol", "Bournemouth ", 
    "Stoke-on-Trent", "Leicester", "Wirral" ,"Coventry", "Nottingham", "Bradford", "Newcastle", "Bolton", "Hull", 
    "Splice1", "Splice2", "Splice3", "Splice4", "Splice5", "Splice6", "Splice7", "Splice8", "Splice9", "Splice10"];
console.log("UK cities: " + cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

//7.3 To remove the element using index: splice().
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements
//array.splice(index(position to add/remove items) , howmany(Number of items to be removed.), item1, ....., itemX (New elements(s) to be added))
console.log("UK cities: " + cities);
console.log(cities);

console.log("Array length: " + cities.length);
console.log("Index[0]: " + cities[0]);
console.log("Index[n]: " + cities[cities.length - 1]);
console.log("IndexOf nth element: " + cities.indexOf(cities[cities.length - 1]));

//Remove item from Array: .splice() - index known
console.log("UK cities: " + cities);

//Remove one item:
var spliced = cities.splice(20, 1);
console.log("Spliced element: " + spliced);

//Remove more items:
console.log("Array length: " + cities.length);
console.log("Index[n]: " + cities[cities.length - 1]);

var spliced = cities.splice(24, 3);
console.log("Spliced element: " + spliced);

//Add spliced elements back:
cities.push(spliced);

console.log("indexOf('Splice1'): " + cities.indexOf("Splice1"));
console.log("Index[n]: " + cities[cities.length - 1]);


//Remove item from Array: .splice() - index not known
console.log("UK cities: " + cities);

console.log("UK cities: " + cities);


//Find and store Index in a variable:
var index = cities.indexOf("Splice4");
console.log("indexOf('Splice4'): " + index);

//Remove element using index value in the index variable:
spliced = cities.splice(index, 1);
console.log("Spliced element: " + spliced);

index = cities.indexOf("Jozi");
if (index !== -1) {
  cities.splice(index, 1);
} else {
    console.log("Value not an element of this Array.");
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]


//cities.splice(0, 0, "Splice", "Slice", "Reduce"); //array.splice(index, howmany, item1, ....., itemX)
//cities.splice(0, 1, "Splice", "Slice", "Reduce"); //array.splice(index, howmany, item1, ....., itemX)