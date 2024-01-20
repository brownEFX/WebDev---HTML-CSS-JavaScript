//If StatementCreating
var name = "Goratileone";
console.log("Hello, " + name + ".");
if (name.length > 7) {
console.log("Wow, you have a REALLY long name!");
}

//myExample:
var candidateName = "Tshepo";
var experience = 9;
var minExperience = 10;
console.log("Hello, my name is " + candidateName + ". I have " + experience + " years experience.");
    if (experience < minExperience) {
        console.log("Sorry, you don't meet minimum requirements for this position.");
    }

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
    
//MyExample:
    //var randomIndex = Math.floor(Math.random() * mixedDataTypes[2][3].length);
    //var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

/*
MyExample:
var register = [
    "Kamogelo", "Vusimuzi", "Tinyiko", "Matlhodi", "Tebogo", "Boitumelo", "Tselane", 
    "Lebogang", "Tshepo", "Thabang", "Botlhale", "Lesiba", "Matsobane", "Raesibe"
];

var experience = [9, 10, 11];
var randomAccNmIndex = [Math.floor(Math.random() * register.length)];
console.log(`Random index: ${randomAccNmIndex}`);
var accountHolder = register[Math.floor(Math.random() * register.length)];
console.log(`Random index: ${accountHolder}`);
console.log(`indexOf ${accountHolder} is ${register.indexOf(accountHolder)}`); //register.indexOf([Math.floor(Math.random() * register.length)])
//var randomIndex = Math.floor(Math.random() * randomWords.length);
//var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
*/