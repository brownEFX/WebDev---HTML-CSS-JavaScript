//1.  Add elements to an array

var animals = ["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]

    //Confirm - view the Array:
    console.log(animals);
        console.log(animals.length);

//2. Add Elements
//2.1 Add elements - arrayName.push(elementName); .push() method displays new Length

    animals.push("Alpaca"); //Adds element to the end of the array
    animals.unshift("Guanaco"); //Adds element to the beginning of the array

    //Confirm - view the Array:
        console.log(animals);
            console.log(animals.length);
                console.log(animals[animals.length-1]); //The nth element
                console.log(animals[0]); //The nth element

//3. Removing Elements from an Array 
//3.1. Remove last element:

console.log(animals);

    animals.pop();
        console.log(animals);

//3.1. Remove last element and store it in a variable:

    var lastAnimal = animals.pop();
    
    //Confirm:
    console.log(lastAnimal);
    console.log(animals);

//Add element from Variable:

    animals.push(lastAnimal); 
    console.log(animals);

//4. Remove first element: use arrayName.shift():
//4.1. Remove first element: arrayName.shift();
    animals.shift();

//4.2. Remove first element and store it in a variable:

    var firstAnimal = animals.shift();
    console.log(firstAnimal);

    //Add element from Variable:

    animals.unshift(firstAnimal);

    console.log(animals);

//Add Elements back:

animals.push("Alpaca"); //Adds element to the end of the array
animals.unshift("Guanaco"); //Adds element to the beginning of the array

console.log(animals);