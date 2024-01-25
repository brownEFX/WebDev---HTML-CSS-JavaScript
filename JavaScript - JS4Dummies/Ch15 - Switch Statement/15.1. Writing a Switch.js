//Example:
var myNumber = prompt("Enter your favorite day of the week!");

var theResponse;

switch (myNumber) {
    case "Monday":
        theResponse = "Ack!";
        break;
    case "Tuesday":
        theResponse = "Taco day!";
        break;
    case "Wednesday":
        theResponse = "Halfway there!";
        break;
    case "Thursday":
        theResponse = "It’s the new Friday!";
        break;
    case "Friday":
        theResponse = "TGIF! Yeah!";
        break;
    case "Saturday":
        theResponse = "What a day!";
        break;
    case "Sunday":
        theResponse = "Sunday = Funday!";
        break;
    default:
        theResponse = "I haven’t heard of that one!";
        break;
}
alert(theResponse);



//MyExample:
var grade = prompt("Enter your letter grade:");

formattedGrade = grade.toUpperCase();

var message;

switch (formattedGrade) {
    case "A":
        message = "Excellent job!";
        break;
    case "B":
        message = "Great job!";
        break;
    case "C":
        message = "Good job!";
        break;
    case "D":
        message = "You need to work a bit harder!";
        break;
    case "E":
        message = "Work harder!";
        break;
    case "F":
        message = "Uh oh!";
        break;
    default:
        message = "Error: invalid grade";
        break;
}
alert(message);