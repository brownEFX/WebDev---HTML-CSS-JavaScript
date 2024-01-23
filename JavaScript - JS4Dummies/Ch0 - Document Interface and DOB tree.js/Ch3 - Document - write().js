//1. Using document.write() - Combining Input and Output
var toName = prompt("Please enter your name");
var fromName = "The Grammy Awards";
// use the \n newline character followed by the \ operator to make the string span multiple lines.
var letterBody = "We are pleased to inform you that your song, 'Can\'t Stop Coding!,'\n\
                has been voted the Best Song of All Time by the awarding committee.";

document.write("Dear " + toName + ",<br><br>");
document.write(letterBody + "<br><br>");
document.write("Sincerely,<br>");
document.write(fromName);

