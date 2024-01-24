//document.getElementById("lefteye").style.backgroundColor = "purple";
//document.getElementById("head").style.transform = "rotate(15deg)";


//Dancing Robot - Eye Bounce - Create variables for eyes6
var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");

//EventListener Syntax: eventTarget.addEventListener("eventName", listener)
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);

//Create moveUpDown listener function:
function moveUpDown(e) {
    var robotPart = e.target; //stores target from the addEventListener method
    var top = 0; //top variable used to position the eye in each   frame of the animation.
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(id); //ends the animation
        }
    }
};

//Dancing Robot - Arm Sweep
var leftArm = document.getElementById("leftarm");
var rightArm = document.getElementById("rightarm");

leftArm.addEventListener("click", moveRightLeft);
//rightArm.addEventListener("click", moveRightLeft);

//Create moveUpDown listener function:
function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}