//OBJECTS
//.1. Creating Objects var objectName{};
var cat = {};

//2. Add values with bracketNotation:
    cat["legs"] = 4;
    cat["full name"] = "Harmony";
    cat["color"] = "Tortoiseshell";
    

    console.log(cat);

//3. Accessing Values in Objects: objectName["key"] | objectName.key;
    //2.1. objectName["key"]
    cat["full name"];
    //2.1. objectName.key;
    cat.color;

//4. Add values with bracketNotation | dotNotation:
    cat.legs = 3;
    cat.catName = "Harmony";
    cat["color"] = "Tortoiseshell";

    console.log(cat["catName"]);

    console.log(cat);

    //Access object values
    console.log(cat.firstName);

    //list of all the keys in an object. Object.keys(objectName);
    console.log(Object.keys(cat));


//MyExample:
//Create an empty object:
var motorVehicles = {};

//Add values with bracketNotation:
motorVehicles["wheels"] = 4;
motorVehicles["doors"] = 4;
motorVehicles["seats"] = "Leather";
motorVehicles["transmission"] = "Automatic";
motorVehicles["fuelType"] = "95 Unleaded";

console.log(motorVehicles);

motorVehicles["wheels"] = 14;
motorVehicles.transmission = "Sportmatic";
motorVehicles.fuelType = "Turbo Diesel";
motorVehicles["body type"] = "Coupe";
console.log(motorVehicles);

//list of all the keys in an object. Object.keys(objectName);
console.log("Object.keys(anyObject) returns an array containing all the keys of anyObject.")

console.log("List all keys in an object - Object.keys(objectName): " + Object.keys(motorVehicles)); 

//Access object values
console.log("Fuel Type: " + motorVehicles.fuelType);
console.log("Body Type: " + motorVehicles['body type']);