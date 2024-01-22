//WhileLoop
//SYNTAX while (condition) { // statement } 
var sheepCounted = 0;
while (sheepCounted < 10) {
console.log("I have counted " + sheepCounted + " sheep.");
sheepCounted++;
}
console.log("Zzzzzzzzzzz");

//
var n = 0;

while (n < 8) {
    console.log(n);
    n++;
}

/*
var x = 10;
while (x > 1) {
    x = x - 1;
    //console.log(x);
    //x++;
}


y = 0;
x = 0;
while ( y < 10 )
    x = x + 1;
  console.log(x)
  x++;

//Each iteration, the loop increments n and adds it to x. Therefore, x and n take on the following values: n = 1 and x = 1, n = 2 and x = 3,  n = 3 and x = 6
var n = 0;
var x = 0;

while (n < 3) {
    console.log(n);
    n++;
    x += n;  
}
console.log(x);
*/

//Curly braces are not required for a single-line body
var i = 3;
while (i) alert(i--);

//A shorter way to write while (i != 0) is while (i):
var i = 3;
console.log(`i = ${i}, while (i != 0)`)
while (i != 0) { // when i becomes 0, the condition becomes falsy, and the loop stops
  //alert( i );
  console.log(i);
  i--;
}

    var i = 3;
    console.log(`i = ${i}, while (i)`)
    while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    //alert( i );
    console.log(i);
    i--;
    }

//Loops through numbers up to 20 and returns all even values:
let myNumber = 1;

console.log(`Loops through numbers up to 20 and returns all even values:`);

while(myNumber != 20) {
 if((myNumber % 2) != 0) {
  myNumber++; }
  else {
  console.log(`${myNumber} is even`);
  myNumber++;
 }
}

//
var x = 1, sum = 0;
 
// Exit when x becomes greater than 10
while (x <= 10) {
    // summing up x
    sum = sum + x;
    console.log(`Summation: ${sum}`);
    // Increment the value of x for next iteration
    x++;
}
//console.log(`Summation: ${sum}`);

//
var i = 1;

while (i < 10) {
  console.log(i);
  i++;
}

//WhileLoop
console.log(`Exponents: x = 3, x *= 3`);
var x = 3;
while (x < 10000) {
console.log(x)
x *= 3;
}

//1. While Loop - Loop Through an Array 
const scores = [22,54,76,92,43,33];

console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

// initialized the index number so iteration starts at index[0]
var i = 0;

//Use array.length so the loop should continue until we reach element in index[n].
while (i < scores.length) {
    console.log(scores[i]);
    i++;
}

//2. While Loop - Loop Through an Array 
let index = 0;
const myArray = [1, 2, 3, 4, 5];
console.log(myArray[index]); 

console.log("Iterating through array using while LOOP:")
while ( index < myArray.length) {
    index++; //1 2 3 4 5 
}