//Access Elements with getElementById() and store it in a variable:
    var myName = "Karabo"
    //= document.getElementById("myName");

    document.getElementById("myName").innerHTML = myName;
    

// Printing the element to the console
    console.log(myName);

//Changing a List:

//1. Variables to store new list
var item1;
var item2;
var item3;

//2. UpdateList - onClick event handler:
//document.getElementById("changeList").onclick = newList;

var updateListButton = document.getElementById("changeList");
updateListButton.addEventListener("click", newList);

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


