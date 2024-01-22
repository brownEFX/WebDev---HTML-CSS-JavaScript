//ARRAYS - FULL Example https://www.instagram.com/p/CzC5DadvV0F/?img_index=1

//0. test

console.log("test");

var ping = "We are on";
console.log(ping + "!");
console.log(`Smoke Test: ${ping}`);

//1. for:
const array = [1, 2, 3, 4, 5];
console.log("Iterating through array using for LOOP:")
for (let index = 0; index < array.length; index++) {
    console.log(array[index]); //1 2 3 4 5 
}

//2. while
let index = 0;
const myArray = [1, 2, 3, 4, 5];
console.log("Iterating through array using while LOOP:")
while ( index < array.length) {
    console.log(array[index]); 
    index++; //1 2 3 4 5 
}

//3. forEach
/*
forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
A function that accepts up to three arguments. 
forEach calls the callbackfn function one time for each element in the array.
Performs the specified action for each element in an array.
*/
const thisArray = [1, 2, 3, 4, 5];
console.log("Loop through array using forEach:")
thisArray.forEach(function(current_value, index, thisArray) {
    console.log(current_value); 
});

//4. map 
const thatArray = [1, 2, 3, 4, 5];
console.log("Loop through array using map:")
const square = x => Math.pow(x, 2);
const squares = thatArray.map(square);

console.log(`Original array: ${thatArray}`); 
console.log(`Squared array: ${squares}`); 

//5. reduce
const newArray = [1, 2, 3, 4, 5];
console.log("Loop through array using reduce:")
const sum = (x, y) => x + y;
const array_sum = newArray.reduce(sum, 0);
console.log(`The sum of array: ${array} is ${array_sum}`);

//6. filter
const nuArray = [1, 2, 3, 4, 5];
console.log("Loop through array using filter:")
const even = x => x % 2 === 0;
const even_array = nuArray.filter(even);
console.log(`Even numbers in an array ${nuArray}: ${even_array}`);

//7. every
const neoArray = [1, 2, 3, 4, 5, 6]; //[8, 9, 12, 16, 21];
const under_seven = x => x < 7;

if (neoArray.every(under_seven)) {
    console.log('less than 7');
} else {
    console.log('bigger than 7');
};

//8. some
const arr = [1, 2, 3, 9, 5, 6, 4]; 
const over_seven = x => x > 7;

if (arr.some(over_seven)) {
    console.log('An element bigger than 7 was found');
} else {
    console.log('No element bigger than 7 was found');
};