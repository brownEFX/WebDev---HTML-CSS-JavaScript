console.log("187 is typeof: " +  typeof 187);

let x = 5;
console.log(`x is typeof: ${typeof x}`); //  'number'

console.log(`Nathan is typeof: ${typeof Nathan}`); // 'string'

console.log(`True is typeof: ${typeof true}`) // 'boolean'

console.log(`Null is typeof: ${typeof null}`); // 'object'

console.log(`[1, 2, 3] is typeof: ${typeof [1, 2, 3]}`); // 'object'

console.log(`{} is typeof: ${typeof {}}`); // 'object'

console.log(`undefined is typeof: ${typeof undefined}`); // 'undefined'

var distance = 3000;
console.log(`distance is typeof: ${typeof distance}`); 

var distance = 800 * 4;
console.log(`distance is typeof: ${typeof distance}`); 

var doTheMath = 7 + 8 + 36 + 18 + 12;
console.log(`doTheMath is typeof: ${typeof doTheMath}`); 

var countrySong = "mama" + "truck" + "train" + "rain";
console.log(`countrySong is typeof: ${typeof countrySong}`);

console.log(`automobile is typeof: ${typeof automobile}`);

//condition ? exprIfTrue : exprIfFalse 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
const a = 10;
const b = 8;
const z = (a > b) ? a : b;
console.log(`If a > b, the c = a : c = b: ${z}`)

//
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

//
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
  };
  
  console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
  console.log(greeting(null)); // "Howdy, stranger"