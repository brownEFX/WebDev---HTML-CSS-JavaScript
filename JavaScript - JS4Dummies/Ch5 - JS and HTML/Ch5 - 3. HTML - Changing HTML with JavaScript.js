//Access Elements with getElementById() and store it in a variable:
    var myName = document.getElementById("myName");
// Printing the element to the console
    console.log(myName);

//innerHTML - select the paragraph and then change the value of its innerHTML
//Original: <p id="myParagraph">This is <em>my</em> paragraph.</p>

document.getElementById("myParagraph").innerHTML = "This is <em>your</em> paragraph!";

//Changing a List:

//1. Variables to store new list
var item1;
var item2;
var item3;

//2. UpdateList - onClick event handler:
document.getElementById("changeList").onclick = newList;

//When button is clicked, run newlist() and Prompt for List items
function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
    }

//Run updateList() - find list items by id then use innerHTML to set contents of the element
function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
    }


