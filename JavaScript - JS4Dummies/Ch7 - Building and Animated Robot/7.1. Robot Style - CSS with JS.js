//1. left eye color:
document.getElementById("lefteye").style.backgroundColor = "purple";

//2. Tilt head to the left:
document.getElementById("head").style.transform = "rotate(15deg)";

//Tilt head to the right: document.getElementById("head").style.transform = "rotate(-15deg)";

//3. Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid";

//4. Round corners of mouth:
document.getElementById("mouth").style.borderRadius = "4px";

//5. Change colour of left arm.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";

//6. Change the text color.
document.getElementById("body").style.color = "#FF0000";

//7. Hair
document.getElementById("head").style.borderTop = "5px black solid";

//EXERCISES:
//Tilt head to the right: document.getElementById("head").style.transform = "rotate(-15deg)";

//Make Douglas’s nose round.
    // Using getElementById to access the element with id "myElement"
    var element = document.getElementById("nose");

    // Changing the style dynamically
    element.style.width= "15%";
    element.style.height= "20%";
    element.style.top = "40%";
    element.style.left = "40%";
    element.style.backgroundColor = "red";
    element.style.borderRadius = "50%";

//document.getElementById("nose").style.height = "40px";
//document.getElementById("nose").style.width = "40px";

//Make Douglas’s right arm green.
document.getElementById("rightarm").style.backgroundColor = "green";

//Make Douglas’s lips pink.
document.getElementById("mouth").style.backgroundColor = "pink";

/*
document.getElementByTagName("p").style.fontFamily= "Google Sans,arial,sans-serif"; /*Helvetica,sans-serif; | Verdana,sans-serif;
//document.getElementByTagName("p").style.fontFamily="Helvatica";

document.getElementsByClassName("eye").style.backgroundColor = "purple";
document.getElementsByClassName("arm").style.backgroundColor = "blue";

document.getElementById("head").style.backgroundColor = "yellow";
document.getElementById("righteye").style.backgroundColor = "purple";
*/