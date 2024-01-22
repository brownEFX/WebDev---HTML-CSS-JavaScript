//If Else Statement
//var yourName = "Nic";
var yourName = "Nickelback"; //'Nickelodeon'
console.log("Hello, " + yourName + ".");
if (yourName.length > 7) {
console.log("Wow, you have a REALLY long name!");
}else {
    console.log("Your name is nice and short.");
    }

//myExample:
var name = "Black"
//var name = "Black"
var myFirstName = "Joe";
var myLastName = "Black";
    if (name === myFirstName) {
        console.log("Hey, Joe. How do you do?");
    } else if (name === myLastName) {
        console.log("Good day, Mr. Black. How are you today?");
    };

//myExamples:
var name = "Joe"
//var name = "Black"
var myFirstName = "Joe";
var myLastName = "Black";
    if (name === myFirstName) {
        console.log("Hey, Joe. How do you do?");
    } else {
        console.log("Good day, Mr. Black. How are you today?");
    };

//myExample:
var candidateName = "Tshepo";
var experience = 9;
//var experience = 10;
var minExperience = 10;
console.log("Hello, my name is " + candidateName + ". I have " + experience + " years experience.");
if (experience < minExperience) {
    console.log(`Sorry, ${candidateName}, you don't meet minimum requirements of ${minExperience} for this position.`);
} else {
    console.log("Congratulations, you may complete the application.");
};

//MyExample:
var applicants = [
    "Kamogelo", "Matlhodi", "Tebogo", "Nthabiseng", "Boitumelo", "Tselane", "Ntebo",
    "Lebogang", "Tshepo", "Thabang", "Botlhale", "Pule", "Pulane", "Ratsela", "Mpho"
];
var randomAplicantIndex = [Math.floor(Math.random() * applicants.length)];
console.log(`Random index: ${randomAplicantIndex}`);

var experience = [9, 10, 11];
var randomExpIndex = [Math.floor(Math.random() * experience.length)];
console.log(`Random index: ${randomExpIndex}`);

var applicantName = applicants[randomExpIndex];
var experience = experience[randomExpIndex];
var minExperience = 10;
console.log(`Hello, my name is ${applicantName}. I have ${experience} years experience.`);
    if (experience < minExperience) {
        console.log(`Sorry, ${applicantName}, you don't meet minimum requirements of ${minExperience} for this position.`);
    } else {
        console.log("Congratulations, you may complete the application.");
    };


//myExamples:
var candidateName = "Tshepo";
var experience = 9;
var minExperience = 10;
var nqfLevel = 7;
console.log(`Hello, my name is ${candidateName}. I have over ${experience} years experience.`);
if (experience > minExperience || nqfLevel >= 8 ) { // | nqfLevel > 8
    console.log("Congratulations, you may complete the application.");
} else {
    console.log(`Sorry, ${candidateName}. Your experience is less than the ${minExperience} years experience required for this position.`);
}

var nqfLevels = [6, 7, 8, 9]
var randomNQFIndex = [Math.floor(Math.random() * nqfLevels.length)];
console.log(`Random index: ${randomNQFIndex}`);
var minNQFLevel = 8;

console.log(`Hello, my name is ${applicantName}. I have ${experience} years experience.`);
if (experience > minExperience || nqfLevel >= minNQFLevel ) {
        console.log(`Congratulations, ${applicantName}, please proceed with the application process.`);
    } else {
        console.log(`Sorry, ${candidateName}. You need minimum ${minExperience} years experience or an NQF Level ${minNQFLevel} for this position.`);
    };