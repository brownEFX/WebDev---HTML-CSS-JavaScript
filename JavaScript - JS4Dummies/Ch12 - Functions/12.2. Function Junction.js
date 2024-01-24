//1. Create three global variables:
var trainSpeed = 250;
var trainPosition = 0;
var animation;

//2. Listen for click events on the train element and call speedUp function.

//EventListener Syntax: eventTarget.addEventListener("eventName", listener)

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

//3. Listen for click events on the stop button and call stopTrain function.
var stopButton = document.getElementById("stopButton")
stopButton.addEventListener("click", stopTrain);

//4. Check whether the train is already going at max speed. If not, increase the speed.
//5. If train is already moving, stop it and then restart with the new speed by calling frame function.
function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
        //clearInterval temporarily stops the animation
        clearInterval(animation);
        //starts up a new setInterval loop using the new value trainSpeed.
        animation = setInterval(frame, trainSpeed);
    }
    //6. Reposition the train and check whether the train is crashed.
    function frame() {
        //increase the value of the trainPosition
        //updates the location of the train according to trainPosition
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        checkPosition(trainPosition);
    }
}

//Check the train's current position and crash it if it's at the end of the line.
function checkPosition(currentPosition) {
    if (currentPosition === 1000) {
        alert("CRASH!");
        consle.log("CRASH!");
        clearInterval(animation);
    }
}

//Test whether the train is already crashed. If not, stop the train.
//function runs when the Stop button is clicked.
function stopTrain() {
    if (trainPosition < 1000) {
        clearInterval(animation);
    }
}