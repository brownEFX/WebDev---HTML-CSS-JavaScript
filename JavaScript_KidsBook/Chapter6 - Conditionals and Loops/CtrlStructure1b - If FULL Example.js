//1. If Statements - used to execute a piece of code if something is true. 
//Example:
var firstName = "Nicholas"; 
console.log("Hello " + firstName);
if (firstName.length > 7) {
    console.log("Wow, you have a REALLY long name!");
    }

//myExample1:
var randomNames = ["Tshepo", "Puseletso", "Kamogelo", "Nthabiseng", "Modise", "Matshediso", "Mmapule", "Koketso", "Kagiso", "Kamogelo"];
var randomNamesIndex = Math.floor(Math.random() * randomNames.length);
console.log(randomNames[randomNamesIndex]);


var randomName = (randomNames[randomNamesIndex]);
 console.log("Random name: " + randomName);
    if (randomName.length > 8) {
        console.log("Wow, that's a REALLY long name!");
        }
		
//myExample2:
var randomWords = ["Dictum", "Truism", "Maxim", "Axiom", "Adage", "Aphorism", "Platitude", "Cliche"];
var randomIndex = Math.floor(Math.random() * randomWords.length);
console.log(randomWords[randomIndex]);


var randomWord = (randomWords[randomIndex]);
 console.log("Word of the day: " + randomWord);
    if (randomWord.length > 5) {
        console.log("Wow, that's a REALLY long word!");
        }

//myExample3:
var pay = [9999, 10000, 12000, 15000, 18000, 21000, 25000, 28000, 32000, 40000, 45000, 50000];
console.log("Pay Scales: " + pay);

var randomPayIndex = Math.floor(Math.random() * pay.length);
console.log("Your pay is R" + (pay[randomPayIndex]) + " per month.");

var randomPay = (pay[randomPayIndex]);
    if (randomPay >= 10000 && randomPay < 20000) {
        console.log("Congratulations, you qualify for a Silver package.");
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
console.log("Hello, my name is " + applicantName + ". I have " + experience + " years experience.");
    if (experience < minExperience) {
        console.log("Sorry, you don't meet minimum requirements for this position.");
    }