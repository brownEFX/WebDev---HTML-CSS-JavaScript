//1. Turning an Array into a String: arrayName.join(); joins elements in an array into a string.
//Default seperator = comma.
var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];

console.log(boringAnimals);
console.log(`Array of boringAnimals: ${boringAnimals}`);

console.log(boringAnimals.join()); //"Monkey,Cat,Fish,Lizard"

    //Default separator = comma.
    var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
    console.log(boringAnimals.join(", ")); //"Monkey,Cat,Fish,Lizard"

        // separator = hyphen.
        var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
        console.log(boringAnimals.join(" - ")); //"Monkey - Cat - Fish - Lizard"

        //separator = space.
        var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
        console.log(myNames.join(" ")); //"Nicholas Andrew Maxwell Morgan"

        //Joining other data types - JS converts them to strings before joining them together:
        var ages = [11, 14, 79];
        console.log(ages.join(" ")); //"11 14 79"

        var naturalNumbers = [3, 2, 1];
        console.log(naturalNumbers.join(" is bigger than ") + "."); 


// Convert String into Array - Array.from()

const str = "Hello";
const charArry = Array.from(str);
console.log(charArry);