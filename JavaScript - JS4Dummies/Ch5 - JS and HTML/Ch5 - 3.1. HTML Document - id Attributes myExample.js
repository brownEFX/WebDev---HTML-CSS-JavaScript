//innerHTML - select the paragraph and then change the value of its innerHTML
//Original: <p id="myParagraph">This is <em>my</em> paragraph.</p>

//document.getElementById("myParagraph").innerHTML = "This is <em>your</em> paragraph!";

//
var course1;
var course2;
var course3;

//button Element in HTML: <button id="updateCourse" type="button"> Update Course</button>

//SYNTAX: document.getElementById("button id‐value").onclick = methodName;
document.getElementById("updateCourse").onclick = newList;

//
function newList() {
    course1 = prompt("Enter a new Course1: ");
    course2 = prompt("Enter a new Course2: ");
    course3 = prompt("Enter a new Course3: ");
    updateList();
    }

//
//innerHTML to set contents of the element
function updateList() {
    document.getElementById("course1").innerHTML = course1;
    document.getElementById("course2").innerHTML = course2;
    document.getElementById("course3").innerHTML = course3;
    }


