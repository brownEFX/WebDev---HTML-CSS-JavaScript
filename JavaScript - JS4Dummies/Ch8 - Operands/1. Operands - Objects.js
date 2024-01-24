/*
Create an Object:
var myObject = {};
console.log(myObject);
*/

//1. Create a dreamCar object:
var dreamCar = {
    make: "BMW",
    model: "x2",
    variant: "xDrive20i",
    color: "blue",
    year: 2022,
    bodyStyle: "Sport Activity Coup",
    price: 4900
    };

    //find out the type of the dreamCar object:
    alert("The type of dreamCar is: " + typeof dreamCar);
    //alert(`The type of dreamCar is: ${typeof dreamCar}`); //object

//2. Update price
document.getElementById("pricetag").innerHTML = dreamCar.price;

//3. Update modelYear
document.getElementById("modelyear").innerHTML = dreamCar.year;

//4. Update color
document.getElementById("body").style.backgroundColor = dreamCar.color;

    //Font:
    //document.getElementById("body").style.fontWeight = dreamCar.bold; //font-weight: bold;

//5. Write out the make and model of the car on the side of the car:
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model + dreamCar.variant;