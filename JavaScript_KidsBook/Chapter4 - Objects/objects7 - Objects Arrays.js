//OBJECTS
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
console.log(friends[2]);

//5. retrieve a value within an object: Enter index and key we want:
console.log(friends[1].name);
console.log("My name is: " + friends[1].name + ". I am " + friends[1].age + 
" old. My lucky number is "  );

var myLuckyNumbers  = [friends[1].luckyNumbers];
var randomLuckyNumber = Math.floor(Math.random() * myLuckyNumbers.length);
console.log("The Random Index is: " + [randomLuckyNumber]);
console.log("Element in Random Index is: " + myLuckyNumbers[randomLuckyNumber]);

console.log(friends[0].luckyNumbers);

console.log(friends[2].luckyNumbers[2]);


//EXAMPLE: An Array of Friends - each object also contains an array
//1.Make three objects and save them into variables called anna, dave, and kate. 
var matePad = { name: "Mate Pad", manufacturer: "Huawei", luckyNumbers: [2, 4, 8, 16] };
var vivoBook = { name: "Vivo Book", manufacturer: "Asus", luckyNumbers: [3, 9, 40] };
var pad6 = { name: "Pad6", manufacturer: "Xiaomi", luckyNumbers: [1, 2, 3] };
var tabP11 = { name: "Tab P11", manufacturer: "Lenovo", luckyNumbers: [1, 2, 3] };
var galaxyTabA7 = { name: "Galaxy Tab A7", manufacturer: "Samsung", luckyNumbers: [1, 2, 3] };
var surfaceGo3 = { name: "Surface Go 3", manufacturer: "Microsoft", luckyNumbers: [1, 2, 3] };
var iPadPro = { name: "iPad Pro", manufacturer: "Apple", luckyNumbers: [1, 2, 3] };

//2. Create an Array of Friends:
var tablets = [matePad, vivoBook, pad6, tabP11, galaxyTabA7, surfaceGo3, iPadPro];

console.log(tablets);

//3. Retrieve objects using its index in the array:
console.log(tablets[4]);

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
