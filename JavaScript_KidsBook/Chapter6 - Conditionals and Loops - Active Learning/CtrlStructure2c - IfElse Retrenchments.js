//Retrenchment Process:
//1. Instantiate what we know
let benchMaxMonths = 12;
let monthsOnBench;
let isQE;

//2. Get what we don't
let conultantName = prompt("Please enter your Name:");
let conultantSurname = prompt("Please enter your Surname:");
monthsOnBench = prompt("Please enter months on the bench:");
isQE = prompt("Are you a QE?:");

//3. Make a decision and generate output
//NOTE: an else always refers to the nearest if without an associated else
if (monthsOnBench >= benchMaxMonths) {
    if (isQE == true) {
        console.log("Congratulations, your job is safe. Please continue learning while on the bench.");
    } else {
        console.log("Sorry, you have been on the bench for longer than "
                + benchMaxMonths + " months. We regret to inform you that you are going to be summarily retrenched.");
    }
} else {
    console.log("You have only been on the bench for " + monthsOnBench + " months. Please use the remaining "
            + (benchMaxMonths - monthsOnBench) + " months to complete your conversion to QE");
}