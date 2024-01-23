//Having Fun with Math
let x = 2;
let y = 10;

let sum = x + y;
console.log(`Sum of x + y: ${sum}`);

let product = x * y;
console.log(`Product of x * y: ${product}`);

let difference = y - x;
console.log(`Difference of y - x: ${difference}`);

let quotient = y / x;
console.log(`Quotient of y/x: ${quotient}`);

let z = x/y;
console.log("Decimal x/y: " + z);
console.log("Decimal z * 1.25: " + z * 1.25);
console.log(`BODMAS: ${x / y * x + y - x}`);
console.log(`BODMAS: ${2 / 10 * 2 + 10 - 2}`);

let storageSizes = [
    {name: "Kilobyte", bytes: 1024, storage: "Two to three paragraphs of text"},
    {name: "Megabyte", bytes: 1048576, storage: "800 pages of text"},
    {name: "Gigabyte", bytes: 1073741824, storage: "250 MP3s"},
    {name: "Terabyte", bytes: 1099511627776, storage: "350000 pictures"},
    {name: "Petabyte", bytes: 1125899906842624, storage: "41943 Blu-ray discs"}
] 

console.log( storageSizes);