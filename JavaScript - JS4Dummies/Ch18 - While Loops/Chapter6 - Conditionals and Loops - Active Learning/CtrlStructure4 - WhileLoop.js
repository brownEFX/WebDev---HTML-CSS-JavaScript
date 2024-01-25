//WhileLoop
//SYNTAX while (condition) { // statement } 
var sheepCounted = 0;
while (sheepCounted < 5) {
console.log(`I have counted ${sheepCounted} sheep.`);
sheepCounted++;
}
console.log("Zzzzzzzzzzz");

//Programming Challenges:
//1. Awesome Animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

animals[0] = "Awesome Cat";
animals[1] = "Awesome Fish";
animals[2] = "Awesome Lemur";
animals[3] = "Awesome Komodo Dragon";

console.log(`Updated Animals Array: ${animals}`)

//OR

animals[0] = "Awesome " + animals[0];
animals[1] = "Awesome " + animals[1];
animals[2] = "Awesome " + animals[2];
animals[3] = "Awesome " + animals[3];
console.log(`Updated Animals Array: ${animals}`)

//Even better:
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
var i = 0;
//Use array.length so the loop should continue until we reach element in index[n].
while (i < animals.length) {
    console.log(`Awesome ${animals[i]}.`);
    i++;
}

//
//MyExample:
var applicants = [
    "Kamogelo", "Matlhodi", "Tebogo", "Nthabiseng", "Boitumelo", "Tselane", "Ntebo",
    "Lebogang", "Tshepo", "Thabang", "Botlhale", "Pule", "Pulane", "Ratsela", "Mpho"
];
var randomAplicantIndex = [Math.floor(Math.random() * applicants.length)];
console.log(`Length of array ${applicants.length}`)
console.log(`Random Applicant: ${applicants[randomAplicantIndex]}`);
console.log(`Random Index: ${randomAplicantIndex}`);

var experience = [9, 10, 11];
console.log(`Length of array ${experience.length}`)
var randomExperience = experience[Math.floor(Math.random() * experience.length)];
console.log(`Random index: ${randomExperience}`);
var randomExpIndex = [Math.floor(Math.random() * experience.length)];
console.log(`Random Applicant: ${randomExpIndex}`);

var applicantName = applicants[randomExpIndex];
var candidateExperience = experience[randomExpIndex];
var minExperience = 10;
console.log("Hello, my name is " + applicantName + ". I have " + candidateExperience + " years experience.");
    if (candidateExperience < minExperience) {
        console.log("Sorry, you don't meet minimum requirements for this position.");
    }

//Random String Generator
var alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(`Alphabets: ${alphabet}`);

var randomString = "";
console.log((alphabet[Math.floor(Math.random() * alphabet.length)]));

var i = 0;
while (i < alphabet.length - 20) {
    randomString += (alphabet[Math.floor(Math.random() * alphabet.length)]);
    i++;
}
console.log(`Random String ${randomString}`)

//h4ck3r sp34k
var input = "javascript is awesome";
console.log(`Input Length: ${input.length}.`)

var output = "";

for (var i = 0; i < input.length; i++) {
    if (input[i] == "a") {
	    //console.log(4);
        output += 4;
    } else if (input[i] == "e") {
            //console.log(3);
            output += '3';
	} else if (input[i] == "i") {
        //console.log(1);
        output += 1;
    } else if (input[i] == "o") {
        //console.log(0);
        output += 0;
    } else {
        //console.log(input[i]);
        output += input[i];   
    }
}
console.log(`Output ${output}`);


//MyExample:
var accounts = 0;
while (accounts < 4) {
console.log(`I have reconciled ${accounts} accounts.`);
accounts++;
}
console.log("Exercise Complete");
//
var i = 0;
console.log(`i = 0, while i < 3:`);
while (i < 3) {
  console.log(i);
  i++;
}

// i++
var i = 0;
console.log(`i = 0, while i <= 3:`);
while (i <= 3) {
console.log(i);
i++;
}

// i--
var i = 5;
while (i > 0) {
    //alert(i--);
    console.log(i);
    i--
}

// while (i != 0)
var i = 3;
while (i != 0) {
    //alert(i--);
    console.log(i);
    i--
}

//while (i != 0)
var i = 3;
while (i) {
    //alert(i--);
    console.log(i);
    i--
}

//Loops through numbers up to 20 and returns all even values:
let myNumber = 1;

console.log(`Loops through numbers up to 20 and returns all even values:`);

while(myNumber != 15) {
 if((myNumber % 2) != 0) {
  myNumber++; }
  else {
  console.log(`${myNumber} is even`);
  myNumber++;
 }
}
/*
var value = prompt ('Please Enter a Number between 1 and 10 (1-10)');

while ( value < 1 || value > 10)

  console.log('Incorrect input, please try again.\n');
  value = prompt('Enter a Number between 1 and 10 (1-10)');
*/

//
var x = 1, sum = 0;
 
// Exit when x becomes greater than 10
while (x <= 3) {
    // summing up x
    sum = sum + x;
    console.log(`Summation: ${sum}`);
    // Increment the value of x for next iteration
    x++;
}
//console.log(`Summation: ${sum}`);

//
//A shorter way to write while (i != 0) is while (i):
var i = 3;
console.log(`i = ${i}, while (i != 0)`)
while (i != 0) { // when i becomes 0, the condition becomes falsy, and the loop stops
  //alert( i );
  console.log(i);
  i--;
}

    var i = 3;
    console.log(`i = ${i}, while (i)`)
    while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
    //alert( i );
    console.log(i);
    i--;
    };

//1. While Loop - Loop Through an Array 
//simpleArray
var simpleArray = ["BMW", "Mercedes-benz","VW", "Audi", "Opel", "Smart"]
console.log(`Simple Array: ${simpleArray}`);
var car = simpleArray.shift();
console.log(`Simple Array: ${simpleArray}`);
console.log(`Car: ${car}`);
simpleArray.unshift(car);
console.log(`Simple Array: ${simpleArray}`);

//
var thisArray = ["BMW", "Mercedes-benz","VW", "Audi", "Opel", "Smart"];

console.log(`thisArray: ${thisArray}`);
console.log(`thisArray - Length: ${thisArray.length}`);

var i = 0;
//Use array.length so the loop should continue until we reach element in index[n].
while (i < thisArray.length) {
    console.log(thisArray[i]);
    i++;
}
//
while (i < thisArray.length) {
    //console.log(thisArray[i]);
    //thatArray = [thisArray.shift()];
    var thatArray=[];
    thatArray.puch([thisArray.shift()]);
    i++;
    console.log(`thatArray: ${thatArray}`);
}



//
const testScores = [38,65,76,92,41,33];

console.log(`Array of Scores: ${testScores}`);
console.log(`Array of Scores - Length: ${testScores.length}`);

// initialized the index number so iteration starts at index[0]
var i = 0;

//Use array.length so the loop should continue until we reach element in index[n].
while (i < testScores.length) {
    console.log(testScores[i]);
    i++;
}

//thisArray
var thisArray = ["BMW", "Mercedes-benz","VW", "Audi", "Opel", "Smart"];
console.log(`This Array: ${thisArray}`);
var thatArray = [thisArray.shift()]; //("Mercedes-benz","VW", "Audi", "Opel", "Smart")
console.log(`That Array: ${thatArray}`);
console.log(`This Array: ${thisArray}`);

/*
//var i = 0;
while(thisArray.length > 0){
    var thatArray = [thisArray.shift()];
    console.log(`That Array: ${thatArray}`);
    i++;
}
*/
//
let someArray = ["Mike", "Rich", "Marc", "Nick", "Paul", "Jaques"];
let notFound = true;
while (notFound && someArray.length > 0) {
    if (someArray[0] === "Pat") {
    console.log(`Found: ${someArray[0]}`);
    notFound = false;
    } else {
    //notFound = true, remove value from the array using the shift();
    var elementNotFound = [];
    elementNotFound.push(someArray.shift());
    //var firstDinosaur = dinosaurs.shift();
    }
}
console.log(`Element not found: ${elementNotFound}`);


//Scores
const scores = [22,54,76,92,43,33];

console.log(`Array of Scores: ${scores}`);
console.log(`Array of Scores - Length: ${scores.length}`);

// initialized the index number so iteration starts at index[0]
var i = 0;

//Use array.length so the loop should continue until we reach element in index[n].
while (i < scores.length) {
    console.log(scores[i]);
    i++;
}

//myArray
let index = 0;
const myArray = [1, 2, 3, 4, 5];
console.log(myArray[index]); 

console.log("Iterating through array using while LOOP:")
while ( index < myArray.length) {
    console.log(index); 
    index++; //1 2 3 4 5 
}


/*
//WhileLoop - Exponents
console.log(`Exponents: x = 3, x *= 3`);
var x = 3;
while (x < 10000) {
console.log(x)
x *= 3;
}

//
console.log(`Exponents: x = 7, x *= 7`);
var x = 7;
while (x < 10000) {
console.log(x)
x *= 7;
}

//Curly braces are not required for a single-line body
/*
var i = 3;
while (i) alert(i--);
//while (i) console.log(i);
*/