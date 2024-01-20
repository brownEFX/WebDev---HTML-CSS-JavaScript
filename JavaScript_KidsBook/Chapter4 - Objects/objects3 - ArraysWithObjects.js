//OBJECTS
//.Creating an Array of Objects;
var dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
    ];
//Access Array
console.log(dinosaurs[1]); //Expected: { name: "Tyrannosaurus Rex", period: "Late Cretaceous" }

//To access one key only:
console.log("Index[0]['period']: " + dinosaurs[0]["period"]);
console.log("Index[0]['name']: " + dinosaurs[0]["name"]); //"Tyrannosaurus Rex"
console.log("Index[1][name]: " + dinosaurs[1]["name"]);
console.log("Index[2][name]: " + dinosaurs[2]["period"]);


//dotNotation
console.log("Index[1][name]: " +dinosaurs[1].name);
console.log("Index[1][name]: " +dinosaurs[2].period);

//EXAMPLE: An Array of Friends - each object also contains an array

//1.Make three objects and save them into variables called anna, dave, and kate. 
var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3] };

console.log("Friends objects: ");
console.log(anna);
console.log(dave);
console.log(kate);

//var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

//2. Create an Array of Friends:
var friends = [anna, dave, kate];

console.log("Array of friends: "); 
console.log(friends);

//3. Retrieve objects using its index in the array:
console.log(friends[0]);

//4. Retrieve objects using its index in the array:
console.log(friends[1]);

//5. retrieve a value within an object: Enter index and key you want:
console.log("friends[0].name: " + friends[0].name);

console.log("friends[1].age: " + friends[1].age);

console.log("friends[2].luckyNumbers[2]: " + friends[2].luckyNumbers[2]);

console.log("friends[2].luckyNumbers[2] - Length: " + friends[2].luckyNumbers.length);

console.log("friends[2].luckyNumbers[2] - random index: " + friends[2].luckyNumbers[Math.floor(Math.random() * friends[2].luckyNumbers.length)]);

//MyExample
var bmw1s = { 'model name': '1 Series', "model code": ['E82', 'F20', 'F40'], 'body type' : "Sports hatch", year: [2020, 2021, 2022], variant: ['118d', '118i', '120d', '120i', '135i'] };
var bmw2s = { 'model name': '2 Series', "model code": ['F22', 'G42'], 'body type' : "Coupe", year: [2022, 2022, 2023], variant: ['218d', '218i', '220d', '220i', '235i'] };
var bmwx2 = { 'model name': 'x2',"model code": ['F39', 'U10'], 'body type' : "Sport Activity Coupe", year: [2021, 2022, 2023], variant: ['sDrive18i', 'sDrive20i', 'xDrive25d'] };

var autoMobil = [bmw1s, bmw2s, bmwx2];
console.log(autoMobil);

console.log("friends[0].name: " + bmwx2["model code"]);
console.log("bmwx2.variant: " + bmwx2.variant);
console.log("bmwx2.variant[0]: " + bmwx2.variant[0]);

console.log("friends[0].name: " + autoMobil[2]['model name']);

console.log("autoMobil[2].year[2]: " + autoMobil[2].year[2]);
