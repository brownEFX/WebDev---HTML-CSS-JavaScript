//If...Else...If Statement
var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
if (lemonChicken) {
console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) {
console.log("I'm having the beef.");
} else if (sweetAndSourPork) {
console.log("OK, I'll have the pork.");
} else {
console.log("Well, I guess I'll have egg-fried rice then.");
}

//Try it Out
//MyExample
var name = "YourName";
//var name = "MyName";
var myName = "MyName";
    if (name === myName) {
        console.log("Hello me!");
    } else {
        console.log("Hey, stranger");
    }

//
var name = "Mouse"; //"Mickey" "Minnie"
var hisName = "Mickey";
var herName = "Minnie"
console.log(`"to live is to suffer, to survive is to find ${herName} in the suffering" - ${hisName}`);

if (name === hisName) {
    console.log(`Hi, ${hisName}.`);
} else if (name === herName) {
    console.log(`Hi, ${herName}.`);
} else {
    console.log(`Good day, ${name}. Please take a chair, we will be with you in a minute.`);
}

//myExample:
var candidateName = "Tshepo";
var experience = 12;
var minExperience = 10;
var nqfLevel = 8;
console.log("Hello, my name is " + candidateName + ". I have over " + experience + " years experience.");
    if (experience < minExperience ) { // | nqfLevel > 8
        console.log("Sorry, your work experience is below the minimum required for this position.");
    } else if (nqfLevel === 7){
        console.log("Congratulations, you may complete the application.");
    } else {
        console.log("Sorry, you don't meet minimum requirements for this position.");
    }

//MyExample:
var applicants = [
    "Kamogelo", "Matlhodi", "Tebogo", "Nthabiseng", "Boitumelo", "Tselane", "Ntebo",
    "Lebogang", "Tshepo", "Thabang", "Botlhale", "Pule", "Pulane", "Ratsela", "Mpho"
];
var randomApplicantIndex = [Math.floor(Math.random() * applicants.length)];
console.log(`Random index: ${randomApplicantIndex}`);
var applicantName = applicants[randomApplicantIndex];
console.log(`Applicant: ${applicantName}`);

var workExperience = [9, 10, 11];
var randomExpIndex = [Math.floor(Math.random() * experience.length)];
console.log(`Random index: ${randomExpIndex}`);
var experience = workExperience[randomExpIndex];
console.log(`Experience: ${experience}`);
var minExperience = 10;

var nqfLevels = [6, 7, 8, 9]
var randomNQFIndex = [Math.floor(Math.random() * nqfLevels.length)];
console.log(`Random index: ${randomNQFIndex}`);
var nqfLevel = nqfLevels[randomNQFIndex];
console.log(`NQF Level: ${nqfLevel}`);
var minNQFLevel = 8;


console.log(`Hello, my name is ${applicantName}. I have ${experience} years experience. I hold an NQF ${nqfLevel} qualification.`);
    if (experience >= minExperience) {
        console.log(`Congratulations, ${applicantName}. Please complete and submit the application.`);
        //console.log(`Sorry, ${applicantName}, you don't meet minimum requirements of ${minExperience} for this position.`);
    } else if ((experience > 7 && experience < 10) && nqfLevel >= 8 ) {
        console.log(`Congratulations, ${applicantName}. Please complete and submit the application.`);
    }else if ((experience >= 5 && experience <= 7) && nqfLevel >= 9 ) {
        console.log(`Congratulations, ${applicantName}. Please complete and submit the application.`);
    } else {
        console.log(`Sorry, ${applicantName}. You don't have the ${minExperience} years experience and/or ${minNQFLevel} NQL Level required for this position.`);
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
    console.log(`Sorry, ${candidateName}. You don't have the ${minExperience} years experience and/or ${minNQFLevel} NQL Level required for this position.`);
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

//myExample:
var lemonChicken = false;
var beefWithBlackBean = true;
var sweetAndSourPork = true;
    if (lemonChicken) {
        console.log("Great! I'm having lemon chicken!");
    } else if (beefWithBlackBean) {
        console.log("I'm having the beef.");
    } else if (sweetAndSourPork) {
        console.log("OK, I'll have the pork.");
    } else {
        console.log("Well, I guess I'll have rice then.");
    }

//myExample
var myAge = 50;

if (myAge < 30) {
    console.log("No, myAge is not less than 30");
}
else if (myAge < 40) {
    console.log("No, myAge is not less than 40");
}
else if (myAge < 50) {
    console.log("No, myAge is not less than 50");
}
else {
    console.log("None of the above");
}

//myExample
var requiredSalary = 30000;
var salary = 29000;
var requiredYearsEmployed = 2;
var years = 3;

if(salary >= requiredSalary) {
    if(years >= requiredYearsEmployed){
        console.log("Congratulations, you qualify for the loan");
    }
    else{
        console.log("Sorry, you must have worked at your current job "
                + requiredYearsEmployed + " years.");
    }
}
else {
    console.log("Sorry, you must earn at least R" + requiredSalary + " to qualify for the loan");
}

//myExample
var premier; 
var premierMin = 350000;
var privateClients; 
var privateClientsMin = 750000;
var privateWealth;
var privateWealthMin = 1800000;
var minYearsEmployed = 5;

var salary = 375000;
var yearsEmployed = 4;

if(salary >= premierMin && salary < privateClientsMin) {
    if(years >= minYearsEmployed){
        console.log("Congratulations, you qualify for a Premier Account. Please contact your Banker.");
    }
        else if (salary >= 500000 && years < minYearsEmployed){
            console.log("Congratulations, you qualify for a Premier Account. Please provide proof of income.");
        }
    else{
        console.log("Sorry, you must have worked at least " + minYearsEmployed + 
        " at your current job.");
    }
}
else {
    console.log("Sorry, you must earn at least R" + premierMin + " to qualify for the Premier Account.");
}

//myExample
var premier; 
var premierMin = 350000;
var privateClients; 
var privateClientsMin = 750000;
var privateWealth;
var privateWealthMin = 1800000;
var minYearsEmployed = 5;

var salary = 1850000;
var yearsEmployed = 5;

if(salary >= premierMin && salary < privateClientsMin) {
    if(years >= minYearsEmployed){
        console.log("Congratulations, you qualify for a Premier Account. Please contact your Banker.");
    }
        else if (salary >= 500000 && years < minYearsEmployed){
            console.log("Congratulations, you qualify for a Premier Account. Please provide proof of income.");
        }
            else{
                console.log("Sorry, you must have worked at least " + minYearsEmployed + 
                " at your current job.");
            }
}else if(salary >= privateClientsMin && salary < privateWealthMin) {
    if(years >= minYearsEmployed){
        console.log("Congratulations, you qualify for a Private Clients Account. Please contact your Banker.");
    }
        else if (salary >= 1000000 && years < minYearsEmployed){
            console.log("Congratulations, you qualify for a Private Clients Account. Please provide proof of income.");
        }
    else{
        console.log("Sorry, you must have worked at least " + minYearsEmployed + 
        " at your current job.");
    }
}else if(salary >= privateWealthMin) {
    if(years >= minYearsEmployed){
        console.log("Congratulations, you qualify for a Private Wealth Account. Please contact your Banker.");
    }
        else if (salary >= 2500000 && years < minYearsEmployed){
            console.log("Congratulations, you qualify for a Private Wealth Account. Please provide proof of income.");
        }
    else{
        console.log("Sorry, you must have worked at least " + minYearsEmployed + 
        " at your current job.");
    }
}
else {
    console.log("Sorry, you must earn at least R" + premierMin + " to qualify for the Premier Account or R" + privateClientsMin + " to qualify for the Private Clients Account or R" + privateWealthMin + " to qualify for the Private Wealth Account");
}

//myExample
var salesQuota = 10;
var sales = 9;
if(sales >= salesQuota){
    console.log("Congratulations, You have met your quota.");
}
else{
    var salesShort = salesQuota - sales;
    console.log(
        "You did not make your quota. The Sales Quota is " + salesQuota + 
        " and your Sales for the period is " + sales + ". You were " + salesShort + " sales short.");
}

 //myExample
var salesQuota = 100000;
var sales = 69000;
if(sales >= salesQuota){
    console.log("Congratulations, you qualify for 100% of your bonus.");
}
else if (sales >= 90000){
    var salesShort = salesQuota - sales;
    console.log("Congratulations, you qualify for 90% of your bonus.");
}
else if (sales >= 80000){
    var salesShort = salesQuota - sales;
    console.log("Congratulations, you qualify for 80% of your bonus.");
}
else if (sales >= 70000){
    var salesShort = salesQuota - sales;
    console.log("Congratulations, you qualify for 50% of your bonus.");
}
else {
    var salesQuotaD = (salesQuota - (salesQuota * 0.3)) 
    var salesShort = salesQuotaD - sales;
    console.log(
        "You did not make your quota. The Sales Quota is " + salesQuotaD + 
        " and your Sales for the period is " + sales + ". You were " + salesShort + " sales short.");
}
