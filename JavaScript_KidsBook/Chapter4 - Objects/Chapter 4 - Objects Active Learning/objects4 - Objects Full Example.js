//OBJECTS
//1.Creating Objects (Keys without quotes. Use quotes for keys with spaces)
var car = {
    make: "BMW",
    model: "2 series",
    variant: "220i ",
    "model line": "M Sport package",
    transmission: "Sport Automatic Transmission",
    year: 2021,
    color: "Tortoiseshell"
    };

    //view object literal 
    console.log(car);

//2. Accessing Values in Objects: objectName["key"] | objectName.key;
//objectName["key"]:
car["model line"];
console.log("Model line: " + (car["model line"]));

//dotNotation: objectName.key;
car.transmission;
console.log("Transmission: " + (car.transmission));

//list of all the keys in an object: Object.keys(objectName);
Object.keys(car);
console.log(Object.keys(car)); 
console.log("Car keys: " + (Object.keys(car))); 

//3. Adding Values to an Object
//Create an empty Object: var objectName{};
    var coupe = {};

//Add values:
    coupe.make = "BMW",
    coupe.model =  "2 series",
    coupe.variant = "220i Coupe",
    coupe["model code"] = "F22 (1st Gen) Facelift" //G42 F39
    coupe["model line"] = "M Automobiles",
    coupe.transmission = "Sport Automatic Transmission",
    coupe.doors = 4;
    coupe["fuel type"] = "Petrol"
    coupe["engine capacity"] = "1998 cc"
    coupe.power = "140kW"
    coupe.torque = "280 Nm"
    coupe.wheels = "20 inch";
    coupe.year = 2021,
    coupe.color = "Monaco Bleu"

    console.log(coupe);

//2. Accessing Values in Objects: objectName["key"] | objectName.key;
console.log(coupe.model);
console.log(coupe.variant);
console.log(coupe.transmission);

console.log(coupe["model code"]);
console.log(coupe["fuel type"]);
console.log(coupe["engine capacity"]);

console.log("Model Code: " + (coupe["model code"]));

//3. //list of all the keys in an object. Object.keys(objectName);
console.log("Coupe Object keys: " + Object.keys(coupe));
console.log(Object.keys(coupe));

//4. Arrays with Object
//Example 1.Creating an Array of Objects;
var dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
    ];

//Access Array
console.log(dinosaurs);

console.log(dinosaurs[0]); //Expected: { name: "Tyrannosaurus Rex", period: "Late Cretaceous" }

//To access one key only:
console.log(dinosaurs[1]["name"]); //"Stegosaurus"

//dotNotation
console.log(dinosaurs[2].name); //"Plateosaurus"

//MyExample:
//Coffee Menu in Welsch
var coffeeInWesh = [
    {englishName:"Americano", welshName: "Coffi", price:"$1.95"},
    {englishName:"Flat White", welshName: "Coffi Cryf Drwy Lefrith", price:"$2.45"},
    {englishName:"Cappuccino", welshName: "Ffrothi Coffi", price:"$2.45"},
    {englishName:"Latte", welshName: "Coffi Drwy Lefrith", price:"$2.25"},
    {englishName:"Cortado", welshName: "Coffi Cryf Bach", price:"$1.95"},
    {englishName:"Espresso", welshName: "Deffro", price:"$1.55"},
    {englishName:"Doppio", welshName: "Deffro 2", price:"$1.85"},
    {englishName:"Extra Shot", wwelshNameelsh: "Shot Ychwanegol", price:"$0.30"},
    {englishName:"Moccha", welshName: "Siocled Gyda Shot o Goffi", price:"$2.75"},
    {englishName:"Hot Chocolate", welshName: "Siocled Poeth", price:"$2.45"},
    {englishName: "Milk Alternative", welshName: "Llefrith Wahanol"},
    {englishName:"Coffee Syrup", welshName: "Triog Coffi", price:"$0.30"},
    {englishName:"Cream", welshName: "Hufen", price:"$0.25"},
    {englishName:"Malws Melys", welshName: "Marshmallows", price:"$0.25"}
    ];

console.log(coffeeInWesh);

console.log(coffeeInWesh[1]);

console.log(coffeeInWesh[1]["welshName"]);
console.log(coffeeInWesh[2].welshName);
console.log("Welsh name for " + coffeeInWesh[3].englishName + " is",coffeeInWesh[3].welshName);
console.log("The price of " + coffeeInWesh[3].englishName + ", known as ",coffeeInWesh[3].welshName + " in Wales is " + coffeeInWesh[3].price);
//MyExample 2:
//An array of car objects
var suv = [
    {make:"VW", bodyType: "SUV", colour:"Black", model: "Tuareg", modelLine: "Executive"},
    {make:"VW", bodyType: "SUV", colour:"Olive Green", model: "Tiguan", modelLine: "R"},
    {make:"VW", bodyType: "SUV", colour:"Blue", model: "T-Roc", modelLine: "R-Line"},
    {make:"VW", bodyType: "SUV", colour:"Blue", model: "T-Cross", modelLine: "R-Line"}
    ];
    
    //Get all the information about the first dinosaur
    console.log(suv);

    console.log(suv[0]);
    
    //Add the object key in square brackets after the array index to get only the model of the first car:
    
    console.log(suv[0]["model"]);
    
    //Or, you can use dot notation, like this (You can use dot notation only with objects, not with arrays).:
    
    console.log(suv[1].model);

//EXAMPLE: An Array of Friends - each object also contains an array
//1.Make three objects and save them into variables called anna, dave, and kate. 
var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

//2. Create an Array of Friends:
var friends = [anna, dave, kate];

console.log(friends);

//3. Retrieve objects using its index in the array:
console.log(friends[1]);

//4. Retrieve objects using its index in the array:
console.log(friends[1]);

//5. retrieve a value within an object: Enter index and key we want:
console.log(friends[1].name);

console.log(friends[0].luckyNumbers);

console.log(friends[2].luckyNumbers[2]);

//MyExample: An Array of Sport Activity Coupés - each object also contains an array
var vw = { modelName: "T-Roc", modelVariant: "R-Line", modelYear: [2019, 2021, 2023]};
var bmw = { modelName: "X2", modelVariant: "sDrive20i", modelYear: [2019, 2021, 2022]};
var audi = { modelName: "Q2", modelLine: "S line 35 TFSI tiptronic", modelYear: [2018, 2020, 2023]};

//2. Create an Array of Friends:
var sav = [vw, bmw, audi];

console.log(sav);

//3. Retrieve objects using its index in the array:
console.log(sav[1]);

//4. Retrieve objects using its index in the array:
console.log(sav[1]);

//5. retrieve a value within an object: Enter index and key we want:
console.log(sav[1].modelName);

console.log(sav[0].modelYear);

console.log(sav[2].modelYear[2]);

//
const myObj = {
    name: "John", age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  console.log(myObj);
