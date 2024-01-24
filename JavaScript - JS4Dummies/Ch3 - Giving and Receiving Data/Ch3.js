//1. Mastering Variables
var book;
var $dollarSign;
var _underScore;

//2. Storing data in variables
book = "JavaScript For Kids For Dummies";
console.log(book);

    //Update:
    book = "The Call of the Wild";
    console.log(book);

//3. Understanding Data Types
//3.1. String data type
    //Length
    console.log("The length of the book is: " + book.length);

    //indexOf
    console.log("The index of 'call' is: " + book.indexOf('Call'));

//3.2. Number data type
a = 10;
console.log("The length * a: " + book.length * a);

//3.3. Boolean - True | False

console.log("The (book.length * a) > 1000: " + (book.length * a) > 1000);
console.log(false === false) // Is false exactly equal to false?
console.log('false' === false) // Is false exactly equal to false?
console.log('false' == false) // Is false exactly equal to false?

//4. Prompting the User for Input
var bookName; //The Unbearable Lightness of Being.
bookName = prompt("Please enter name of book:");
console.log("The name of the book is: " + bookName);

//5. Responding to Input - Using alert()
console.log(alert(`${bookName} is in the 100 Best Books ever list.`));
//
var reservedWords = [
    "break","case","class","catch","const","continue","debugger","default","delete","do",
    "else","export","extends","finally","for","function","if","import","in","instanceof",
    "let","new","return","super","switch","this","throw","try","typeof","var","void","while",
    "with"," yield"
];

//Printing a String
let userName = "Kabo" 
console.log("Hello, world. My name is " + userName);

//escaping the quotation mark - using backslash before a quotation mark in a string.
console.log("Hi, " + userName + ". Joe said, 'Hi.'");
console.log("Hi, " + userName + '. Joe said, "Hi."');
console.log("Hi, " + userName + ". Joe said, \"Hi.\"");
//Printing the backslash:
console.log("Hi, " + userName + ". Joe said, \\\"Hi.\"");