//ARRAYS - LOOP - FULL Example https://www.freecodecamp.org/news/how-to-loop-through-an-array-in-javascript-js-iterate-tutorial/ 
//0. test

console.log("test");

var ping = "We are on";
console.log(ping + "!");
console.log(`Smoke Test: ${ping}`);
//
//Iterate through the Array: forEach
    const arr = ["squirrel", "alpaca", "buddy"];
    arr.forEach(e => console.log(e));
    //
    const arrs = ["squirrel", "alpaca", "buddy"];
    arrs.forEach(e => console.log(`happy ${e}`));
    //
    const calc = [2, 4, 6, 8, 10];
    calc.forEach(e => console.log(`happy ${e *= 3}`));
//

//
//1. Array
const scores = [22,54,76,92,43,33];

console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

//2. Loop Through an Array 
//2.1. While Loop

// initialized the index number so iteration starts at index[0]
var i = 0;

//Use array.length so the loop should continue until we reach element in index[n].
while (i < scores.length) {
    console.log(scores[i]);
    i++;
}

//2. do...while -  run once before evaluating any condition set.
console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

var i = 0;
do {
    console.log(scores[i]);
    i++;
} while (i < scores.length);

//
var i = 6;
do {
    console.log(scores[i]); //undefined
    i++;
} while (i < scores.length);

//3. for Loop
console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
}

//4. for...in Loop
console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);


for (i in scores) {
    console.log(scores[i]);
}

//5. for...of
console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

var score;
for (score of scores) {
    console.log(score);
}

//6.forEach aka callback function
console.log(`forEach() loop's through any array, executing a provided function once for each array element in ascending index order.`);
console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

var score;
scores.forEach((score) => {
    console.log(score);
});

//OR

scores.forEach((score) => console.log(score));

/*
forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
A function that accepts up to three arguments. 
forEach calls the callbackfn function one time for each element in the array.
Performs the specified action for each element in an array.

const thisArray = [1, 2, 3, 4, 5];
console.log("Loop through array using forEach:")
thisArray.forEach(function(current_value, index, thisArray) {
    console.log(current_value); 
});

/*
//1. Array
const scores = [22,54,76,92,43,33];

console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

//2. Loop Through an Array 
//2.1. While Loop

// initialized the index number so iteration starts at index[0]
var i = 0;

//Use array.length so the loop should continue until we reach element in index[n].
while (i < scores.length) {
    console.log(scores[i]);
    i++;
}

let index = 0;
const myArray = [1, 2, 3, 4, 5];
console.log(array[index]); 

console.log("Iterating through array using while LOOP:")
while ( index < array.length) {
    index++; //1 2 3 4 5 
}

//1. for:
const array = [1, 2, 3, 4, 5];
console.log("Iterating through array using for LOOP:")
for (let index = 0; index < array.length; index++) {
    console.log(array[index]); //1 2 3 4 5 
}

//
const luckyNumbers = [1,1,2,3,5,8,13,21,34,55,89];

console.log(`luckyNumbers array - Length: ${luckyNumbers.length}`);
for (let i = 0; i < luckyNumbers.length; i++) {
    console.log(luckyNumbers[i]);
}



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

*/