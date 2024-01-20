//1. Turning an Array into a String: arrayName.join(); joins elements in an array into a string.
//separator = space.
        var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
        console.log(`myNames: ${myNames}`);
        console.log(myNames.join(" ")); //"Nicholas Andrew Maxwell Morgan"

        //Joining other data types - JS converts them to strings before joining them together:
        var ages = [11, 14, 79];
        console.log(ages.join(" ")); //"11 14 79"

        var naturalNumbers = [3, 2, 1];
        console.log(naturalNumbers.join(" is bigger than ") + "."); 


//2. Turning an String into an Array: array.from ();Convert String into Array - Array.from()

var thisString = "Supercalifragilisticexpialidocious";
var thisCharArry = Array.from(thisString);
console.log(thisCharArry);