//1. : Scorekeeper
/*
Imagine you’re playing a game with some friends and you want to keep track of the score. 
Create an object called scores. 
The keys will be the names of your friends, and the values will be the scores (which will all start at 0). 
As the players earn points, you must increase their scores. 
How would you increase a player’s score in the scores object?
*/


//2. Digging into Objects and Arrays
//get the number 123 out of this object using one line of JavaScript?
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
    };

    console.log(myCrazyObject["some array"]);
    console.log(myCrazyObject["some array"][2]);
    console.log(myCrazyObject["some array"][2].number);
