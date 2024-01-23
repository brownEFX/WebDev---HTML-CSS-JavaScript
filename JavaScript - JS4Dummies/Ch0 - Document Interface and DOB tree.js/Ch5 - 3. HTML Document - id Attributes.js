//innerHTML - select the paragraph and then change the value of its innerHTML
//Original: <p id="myParagraph">This is <em>my</em> paragraph.</p>

//document.getElementById("myParagraph").innerHTML = "This is <em>your</em> paragraph!";

//Variables for newHobbies
var hobby1;
var hobby2;
var hobby3;

//getElementById to locate/select an individual element so you can change it, delete it, or add something to it. 
//SYNTAX: document.getElementById("id‐value")
//	<button id="changeHobbies" type="button">Change Your Hobbies</button>
document.getElementById("changeHobbies").onclick = newHobbies;

//Get new hobbies from user using prompt();
function newHobbies() {
    hobby1 = prompt("Enter a new first hobby: ");
    hobby2 = prompt("Enter a new second hobby: ");
    hobby3 = prompt("Enter a new third hobby: ");
    updateHobbies();
    }

//innerHTML to set contents of the element
function updateHobbies() {
    document.getElementById("firstHobby").innerHTML = hobby1;
    document.getElementById("secondHobby").innerHTML = hobby2;
    document.getElementById("thirdHobby").innerHTML = hobby3;
    }

//Example 2
//Declare variables:
var course1;
var course2;
var course3;

//getElementById to locate/select an individual element so you can change it, delete it, or add something to it. 
//SYNTAX: document.getElementById("id‐value")
//	<button id="changeCourses" type="button">Change Your Hobbies</button>
document.getElementById("changeCourses").onclick = newCourses;

//Get new courses using prompt();
function newCourses() {
    course1 = prompt("Enter a new first course: ");
    course2 = prompt("Enter a new second course: ");
    course3 = prompt("Enter a new third course: ");
    updateCourses();
    }

//innerHTML to set contents of the element
function updateCourses() {
    document.getElementById("firstCourse").innerHTML = course1;
    document.getElementById("secondCourse").innerHTML = course2;
    document.getElementById("thirdCourse").innerHTML = course3;
    }

/*
<li id="firstCourse">HTML</li>
<li id="secondCourse">CSS</li>
<li id="thirdCourse">JavaScript</li>
<li id="fourthCourse">Java</li>
<li id="fifthCourse">SQL</li>
<li id="sixthCourse">Postman</li>
*/
