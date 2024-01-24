//1. Smiley Face 

//a. Define function();
function smileyIt(theText) {
    theText += " :)";
    return theText;
}

//b. Call function();
alert(smileyIt("Hiya!"));

//document.getElementById("smileyIt").innerHTML = theText.valueOf();

//2. Double function:

//Return
var number;
function double(number) {
	return number * 2;
}
console.log(double(10));

let answer = double(9);
console.log(`Double ${number}: ${answer}`);

//document.getElementById("smileyIt").innerHTML = (`Double ${number} = ${answer}`).valueOf();

//3. Square:

function square(number) {
    return number * number;
  }

  console.log(square(3));

 //4. Return Value

 function whatsTheNumber(){
    return 3000;
    };

console.log(whatsTheNumber);

var theTotal = whatsTheNumber() + 80;

console.log(theTotal);
