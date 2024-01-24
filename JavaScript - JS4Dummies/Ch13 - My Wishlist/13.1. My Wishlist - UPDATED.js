//1. create an event listener for the add button, with a handler function called addTheThing

    //<button type="button" id="addIt">Add It!</button>
  
    document.getElementById("addIt").onclick = addTheThing;

    //var addButton = document.getElementById("addIt");
    //addButton.addEventListener("click", addTheThing);

//2. create an event listener for the print button, with a handler function called printView

    //<button type="button" id="printable">Print Your List</button>
    document.getElementById("printable").onclick = printView;

    /*
    var printButton = document.getElementById("printable");
    printButton.addEventListener("click", printView);
    */

//3 - GLOBAL VARIABLES:
//3.1. create a blank array named myList

    var myList = [];
   

//3.2. create a variable, myListArea, which references the element with the id of 'wishList'

    var myListArea = document.getElementById("wishList");

//4. function addTheThing gets the value of the text field and then passes it to a function called addToTheList. It then runs a function called resetInput
//Called by: document.getElementById("addIt").onclick = addTheThing;
//doesn’t get the value of the input field, just stores a reference to the element that can be used later to get the value.

    function addTheThing() {

      //Local variable: theThing assigned to the iWant input field:
      var theThing = document.getElementById("iWant");

      //Pass theThing as an argument to the function addToTheList():
      addToTheList(theThing);
      //Pass theThing as an argument to the function resetInput():
      resetInput(theThing);

    }

//6.  function addToTheList, which takes one parameter, called thingToAdd, pushes it into the myList array, and then adds it to myListArea
//We are passing theThing to the function when we call it. 
//The value of theThing gets passed to thingToadd. 
//The variable thingToAdd gets created the moment you call the function and pass an argument to it.

    function addToTheList(thingToAdd) {

      //push() to add the current value of the input field to the end of myList array.
      myList.push(thingToAdd.value); //myList.unshift(thingToAdd.value);

      //The createElement() method creates a new empty <li> element stored inside a new variable called newListItem.
      var newListItem = document.createElement("li");

      //Change the innerHTML property of the new element to put the current value of the input field into it.
      //myList.length - 1 returns value for the myList[n-1] for the last index
      newListItem.innerHTML = myList[myList.length - 1];

      ////This statement add value for the myList[n-1] to the list
      //appendChild to adds new <li> element to the end of the contents of the element referenced by the myListArea variable.
      myListArea.appendChild(newListItem);

    }

//7. function resetInput, which resets the value of the input field to blank ("")

    function resetInput(inputToReset) {
      //changes value property of the element to an empty string | clears the input field:
      inputToReset.value = "";
    }

//8. /*function printView, which outputs a nicely formatted view of the list 
//printView 

    function printView() {

      //Create a new variable to hold a reference to the entire page.
      var listPage = document.getElementById("listPage");

      //Create a new variable to hold a reference to the form area of the page:
      var formArea = document.getElementById("formArea");

      //Change value of the CSS display property to "none" to hide form:
      formArea.style.display = "none";

      //Add a new class attribute with a value of "print" to the listPage element
      //This Statement modifies the first div element from this <div id="listPage"> to <div id="listPage" class="print"></div>
      listPage.className = "print";

      //Clear all the items from the list:
      myListArea.innerHTML = "";

      //Use the sort() Method to alphabetically sort the Array:
      myList.sort();

      //Loop to print out each value in the array:
      for (var i = 0; i < myList.length; i++) {
          wishList.innerHTML += "<li>" + myList[i] + "</li>";
      }
      //Open the Print dialog box using print() method.
      window.print();
    }