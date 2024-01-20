//WhileLoop
var sheepCounted = 0;
while (sheepCounted < 10) {
console.log("I have counted " + sheepCounted + " sheep.");
sheepCounted++;
}
console.log("Zzzzzzzzzzz");

for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
	console.log("I have counted " + sheepCounted + " sheep!");
	}
	console.log("Zzzzzzzzzzz");

var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
    console.log("Hello!");
    }

//do something with every element in an array
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];

console.log(animals);

console.log(animals.length);

for (var i = 0; i < animals.length; i++) {
    console.log("This zoo contains a " + animals[i] + ".");
    }
    
//access individual characters in a string:
var name = "Nick";
    for (var i = 0; i < name.length; i++) {
    console.log("My name contains the letter " + name[i] + ".");
    }

    //Powers of 2 under 10000
    for (var x = 2; x < 10000; x = x * 2) {
        console.log(x);
        }

        //Powers of 3 under 10000
        for (var x = 3; x < 10000; x = x * 3) {
            console.log(x);
            }

            //WhileLoop
var x = 3;
while (x < 10000) {
//console.log("I have counted " + sheepCounted + " sheep.");
console.log(x)
x = x * 3;
}
//console.log("Zzzzzzzzzzz");
