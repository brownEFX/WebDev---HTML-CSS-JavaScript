//1. Adding Arrays: Use firstArray.concat(otherArray):
//5.1. Add 2 Arrays:
//FirstArray
var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];

console.log("Array of furryAnimals: " + furryAnimals); //["Alpaca", "Ring-tailed Lemur", "Yeti"]
console.log(`Array of furryAnimals: ${furryAnimals}`);

//SecondArray
var scalyAnimals = ["Boa Constrictor", "Godzilla"];

console.log("Array of scalyAnimals: " + scalyAnimals); //["Boa Constrictor", "Godzilla"]
console.log(`Array of scalyAnimals: ${scalyAnimals}`);

//Concatenate
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
console.log("Two Concatenated Arrays: " + furryAndScalyAnimals); //["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla"]
//Original Arrays:
console.log("Original Array of furryAnimals: " + furryAnimals); //["Alpaca", "Ring-tailed Lemur", "Yeti"]
console.log("Original Array of scalyAnimals: " + scalyAnimals); //["Boa Constrictor", "Godzilla"]

//5.2. Add multiple Arrays:
//Create multiple arrays:
var furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var featheredAnimals = ["Macaw", "Dodo"];

//Concatenate multiple arrays:
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log("Multiple Concatenated Arrays: " + allAnimals);

   //Original Arrays:
   console.log("Original Array of furryAnimals: " + furryAnimals);
   console.log("Original Array of scalyAnimals: " + scalyAnimals);
   console.log("Original Array of scalyAnimals: " + featheredAnimals);

//MyExample:
var fruits = ["Apple", "Banana", "Orange", "Berry", "Pineapple"];

console.log("Array of fruits: " + fruits);

var veggies = ["Spinach", "Kale", "Cabbage", "Peas", "Beans"];

console.log("Array of veggies: " + veggies);

    //Concat and store in a new variable:
    var fruitsAndVeg = fruits.concat(veggies);
    console.log("Two Concatenated Arrays: " + fruitsAndVeg);

    //Original Arrays:
    console.log("Original Array of fruits: " + fruits);
    console.log("Original Array of veggies: " + veggies);

//MyExample:
var fruits = ["Apple", "Banana", "Orange", "Berry", "pineapple"];
var veggies = ["Spinach", "Kale", "Cabbage", "Peas", "Beans"];
var nuts = ["Peanuts", "Pinenuts", "Almonds", "Cashews", "Pecans"];

    //Concatenate
    var fruitsVegNuts = fruits.concat(veggies, nuts);

    //Original Arrays:
   console.log(fruits);
   console.log(veggies);
   console.log(nuts);