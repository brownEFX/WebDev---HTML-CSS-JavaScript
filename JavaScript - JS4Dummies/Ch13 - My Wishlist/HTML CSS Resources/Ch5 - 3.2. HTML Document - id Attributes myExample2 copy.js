//Create variables to hold user input:
var item1;
var item2;
var item3;

document.getElementById("firstThing");

//Use getElementById to locate the element in the document where id="changeList".
//Make JS pay attention to clicks on the button: onclick event handler
document.getElementById("changeList").onclick = newList;

//newList() function: Ask User for New List:
function newList(){
item1 = prompt("Enter a new first thing: ");
item2 = prompt("Enter a new second thing: ");
item3 = prompt("Enter a new third thing: ");
updateList();
}

//Tell JS to update the three list items.
function updateList() {
document.getElementById("firstThing").innerHTML = item1;
document.getElementById("secondThing").innerHTML = item2;
document.getElementById("thirdThing").innerHTML = item3;
}