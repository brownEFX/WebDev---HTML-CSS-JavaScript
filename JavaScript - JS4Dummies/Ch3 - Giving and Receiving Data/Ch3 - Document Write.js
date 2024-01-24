//1. Using document.write()
/* a web page is called a document. It can be changed by using the write method.*/
document.write(333 + 100 + "<br>");

document.write("How are you?<br>");
document.write("I'm great! Thanks!<br>");
document.write("That's awesome!<br><br>");

//2. Combining Input and Output
<p>This book.</p>
var toName = prompt("Please enter your name");
var fromName = "The Grammy Awards";
// use the \n newline character followed by the \ operator to make the string span multiple lines.
var letterBody = "We are pleased to inform you that your song, 'Can\'t Stop Coding!,'\n\
                has been voted the Best Song of All Time by the awarding committee.";

document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName);

/*
//Mastering Variables
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
*/