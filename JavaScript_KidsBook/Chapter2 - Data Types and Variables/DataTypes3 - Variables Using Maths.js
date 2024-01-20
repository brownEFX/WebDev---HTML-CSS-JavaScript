//0. test
    console.log("Test: The ayes have it, the ayes have it");

    var ping = "Jessica, we are live";
    console.log(ping + "!!!");
    
//Creating New Variables Using Math - Seconds in a year
//1. Seconds in an hour:
var secondsInAMinute = 60;
console.log(`There are ${secondsInAMinute} seconds in a minute.`);
var minutesInAnHour = 60;
console.log(`There are ${minutesInAnHour} minutes in an hour.`);
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log("There are " + secondsInAnHour + " seconds in an hour.");

//2. Seconds in a day:
var hoursInADay = 24;
console.log(`There are ${hoursInADay} hours in a day.`);
var secondsInADay = secondsInAnHour * hoursInADay;
console.log("There are " + secondsInADay + " seconds in a day.");

//3. Seconds in a Year
var daysInAYear = 365;
console.log(`There are ${daysInAYear} days in a year.`);
var secondsInAYear = secondsInADay * daysInAYear;
console.log("There are " + secondsInAYear + " seconds in a year.");

//3. Minutes in a Year (the equation is 365 days x 24 hours in a day x 60 minutes in an hour = 525,600 minutes in a year. )
var minutesInAYear = secondsInAYear / 60;
console.log(minutesInAYear + " minutes in a year. How do you measure, measure a year?");
console.log(minutesInAnHour * hoursInADay * daysInAYear  + " minutes in a year. How do you measure moments so dear?")

//Age in Seconds
var age = 29;
console.log(`I am ${age} years old.`);
ageInSeconds = age * secondsInAYear;
console.log("Age: " + age + ", in seconds: " + ageInSeconds + ".");
console.log(`I am ${age} years old or a whopping ${ageInSeconds} seconds old`);

//Incrementing and Decrementing











