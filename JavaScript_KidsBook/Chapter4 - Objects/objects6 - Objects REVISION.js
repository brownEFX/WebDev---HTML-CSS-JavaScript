//OBJECTS
//1.Creating Objects (Keys without quotes. Use quotes for keys with spaces)
var iphone = {
    make: "Apple",
    model: "SE",
    "operating system": "iOS 17",
    capacity: "256gb",
    chip: "A15",
    "model line": "RED",
    display: "Retina HD",
    "screen size": "4.7 inch",
    year: 2023,
    color: "RED"
    };

    //view object literal 
    console.log(iphone);

//2. Accessing Values in Objects: objectName["key"] | objectName.key;
//objectName["key"]:
iphone["screen size"];
console.log("Model line: " + (iphone["operating system"]));

//dotNotation: objectName.key;
iphone.display;
console.log("Chip: " + (iphone.chip));

//list of all the keys in an object: Object.keys(objectName);
Object.keys(iphone);
console.log(Object.keys(iphone)); 
console.log("Car keys: " + (Object.keys(iphone))); 

//3. Adding Values to an Object
//Create an empty Object: var objectName{};
    var appleWatch = {};

//Add values:
appleWatch.make = "Apple",
appleWatch.model =  "Series 9",
appleWatch.charger = "USB C magnetic fast charging cable",
appleWatch["operating system"] = "WatchOS 10",
appleWatch.chip = "S9 SiP",
appleWatch.display = "Always-On Retina display",
appleWatch["water resistance"] = "50m",
appleWatch.connectivity = "GPS + Cellular",
appleWatch.battery = "Built-in rechargeable lithium-ion battery",
appleWatch["battery life"] = "Up to 18 hours",
appleWatch.case = "Stainless Steel",
appleWatch["case size"] = "45mm",
appleWatch["display area"] = "1143 sq mm",
appleWatch["case colour"] = "Gold",
appleWatch["band type"]= "Nike Sport Band",
appleWatch["band colour"]= "Cargo Khaki"

console.log(appleWatch);

//2. Accessing Values in Objects: objectName["key"] | objectName.key;
console.log(appleWatch.charger);
console.log(appleWatch["operating system"]);

console.log("Battery Power: " + (appleWatch["battery power"]));

//3. //list of all the keys in an object. Object.keys(objectName);
Object.keys(appleWatch);
console.log(Object.keys(appleWatch));
console.log("Coupe Object keys: " + Object.keys(appleWatch));

//4. Arrays with Object
//Example 1.Creating an Array of Objects;
var iWatch = [
    { model: "SE", caseSize: "44mm", waterResistance: "50m", batteryLife: "18 hours" },
    { model: "Series 9", caseSize: "45mm", waterResistance: "50m", batteryLife: "18 hours" },
    { model: "Ultra 2", caseSize: "49mm", waterResistance: "100m", batteryLife: "36 hours" }
    ];

//Access Array
console.log(iWatch);

console.log(iWatch[0]); //Expected:  { model: "SE", caseSize: "44mm", waterResistance: "50m", batteryLife: "18 hours" }

//To access one key only:
console.log(iWatch[2]["model"]); //"Ultra 2"

//dotNotation
console.log(iWatch[2].model); //"Ultra 2"

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