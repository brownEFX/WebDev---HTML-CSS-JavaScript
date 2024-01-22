//for...of https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

console.log("for...of Syntax: for (variable of iterablee) statement");

//Example1:
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

//Exaxmple2:
var months = [];
months.splice(0, 0, 'Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
console.log(months);
console.log("Months: " + months);

for (const month of months) {
    console.log(month);
}

//Example3:
const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}

