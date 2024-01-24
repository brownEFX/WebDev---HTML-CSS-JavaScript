//id="myName"
//Define button:
document.getElementById("updateName").onclick = newName;

//Variable:
var UpdatedName;

//Get input
function newName() {
        UpdatedName = prompt("Update your new name: ");
        updateName();
}

//Save input
function updateName() {
        document.getElementById("myName").innerHTML = UpdatedName;
}

//document.getElementById("myParagraph").innerHTML = "This is <em>your sparse</em> paragraph!";
///id="aboutMe"
document.getElementById("updateProfile").onclick = newProfile;

var profile;

function newProfile() {
        profile = prompt("Update your profile: ");
        updateProfile();
}

function updateProfile() {
        document.getElementById("aboutMe").innerHTML = profile;
}

///id="myParagraph"
document.getElementById("updateParagraph").onclick = newParagraph;

var paragraph;

function newParagraph() {
        paragraph = prompt("Update your paragraph: ");
        updateParagraph();
}

function updateParagraph() {
        document.getElementById("myParagraph").innerHTML = paragraph;
}

//id=course1/2/3
var course101;
var course102;
var course103;

document.getElementById("updateCurriculum").onclick = newCurriculum;

function newCurriculum() {
        course101 = prompt("Enter a new first course: ");
        course102 = prompt("Enter a new second course: ");
        course103 = prompt("Enter a new third course: ");
        updateCurriculum();
}

function updateCurriculum() {
        document.getElementById("course1").innerHTML = course101;
        document.getElementById("course2").innerHTML = course102;
        document.getElementById("course3").innerHTML = course103;
}

//id="myPlanets"
var Account1;
var Account2;
var Account3;
var Account4;
var Account5;

//<button id="updateAccounts" type="button"> Update Accounts</button>
document.getElementById("updateAccounts").onclick = newAccounts;

function newAccounts() {
        Account1 = prompt("Update your Account1: ");
        Account3 = prompt("Update your Account3: ");
        Account5 = prompt("Update your Account5: ");
        updateAccounts();
}

function updateAccounts() {
        document.getElementById("Account1").innerHTML = Account1;
        document.getElementById("Account3").innerHTML = Account3;
        document.getElementById("Account5").innerHTML = Account5;
}