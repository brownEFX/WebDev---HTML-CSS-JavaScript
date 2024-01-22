//Nested If Else If
var rate = 600;
var maxHours = 160;

//var hoursWorked = 160;
var hoursWorked = prompt("How many hours did you work this month?");
var grossPayInputValidation = function (maxHours, hoursWorked) {
    while(hoursWorked > maxHours || hoursWorked < 1) {
        console.log("Invalid entry. Your hours must be between 1 and 160. Try again.");
        //hoursWorked = scanner.nextDouble();
        hoursWorked = prompt("How many hours did you work this month?");
    }
}
grossPayInputValidation(maxHours,hoursWorked);
var grossPay = rate * hoursWorked;
console.log("Your gross pay for this month is R" + grossPay);

