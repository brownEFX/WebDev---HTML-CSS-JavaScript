//1. values();
const arr = ["apple", "banana", "cherry", "strawberries", "pineapple"]
const iterator = arr.values();

for (const value of iterator) {
    console.log(value);
}

//2. length();
console.log(arr.length);

//3. reverse()
arr.reverse();
console.log(arr);
console.log(arr.reverse());

//4. sort()
arr.sort();
console.log(arr);
console.log(arr.sort());

//5. at();
//6. fill();
//7. from();

//8. join()
var str = arr.join(", ")
console.log(str);

//8. concat()
var fruit = ["grape", "pear", "prune"];
var nuts = ["peanuts", "walnuts", "almonds"];
var fruitsNuts = fruit.concat(nuts);
console.log(fruitsNuts);

//8. toString()
var arrStr = arr.toString;
console.log(arrStr);

//09. push();
arr.push("grape", "pear", "prune", "plum", "orange", "nectarine", "grapefruit");
console.log(arr);
//10. pop();
arr.push();
console.log(arr);
//10. unshift();
arr.unshift("beetroot", "kale");
console.log(arr);
//12. shift();
arr.shift();
console.log(arr);

//14. forEach(); executes the function for each array element
let fruits = ["grape", "pear", "prune", "plum", "orange", "nectarine", "grapefruit"];
fruits.forEach(function (item) {
    console.log(item);
});

//15. copyWithin();
