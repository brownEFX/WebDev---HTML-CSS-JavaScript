//0. new Date
var myDate = new Date();
console.log(myDate);

console.log("myDate: " + myDate);

console.log(`new Date: ${myDate}`);

//1. getDate(): Gets the day of the month (1–31).

var thisDate = myDate.getDate()
console.log(`getDate: ${thisDate}`);

//2. getDay(): Gets the day of the week as a number (0–6).
console.log(`getDay: ${myDate.getDay()}`);

//3. getFullYear(): Gets the year (yyyy).

console.log(`getFullYear: ${myDate.getFullYear()}`);

//4. getHours(): Gets the hour (0–23).

console.log(`getHours: ${myDate.getHours()}`);

//5. getMilliseconds() Gets the fraction of a second (0–999).

console.log(`getMilliseconds: ${myDate.getMilliseconds()}`);

//6. getMonth() Gets the month (0–11).

console.log(`getMonth: ${myDate.getMonth()}`);

//7.getSeconds() Gets the seconds (0–59).

console.log(`getSeconds: ${myDate.getSeconds()}`);

//8. getTime() Gets the time, in Unix time (milliseconds since January 1, 1970).

console.log(`getTime: ${myDate.getTime()}`);