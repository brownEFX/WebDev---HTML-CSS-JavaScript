//0. new Date
var myNewDate = new Date();
console.log(myNewDate);

console.log("myNewDate: " + myNewDate);

console.log(`myNewDate: ${myNewDate}`);

//1. setDate(): Sets the day of the month (1–31):
myNewDate.setDate(1);
console.log(`setDate(1): ${myNewDate.getDate(1)}`);
console.log(`setDay: ${myNewDate.getDay()}`);

myNewDate.setDate(10);
console.log(`Sunday 10 Dec 2023 is day ${myNewDate.getDate()} of the month.`);

//2. setDay(): Sets the day of the week as a number (0–6).
myNewDate.setDate(9);
console.log(`Saturday 9 Dec 2023 day ${myNewDate.getDay()} of the week`);

myNewDate.setDate(10);
console.log(`Sunday 10 Dec 2023 day ${myNewDate.getDay()} of the week`);

//3. getFullYear(): Gets the year (yyyy).

console.log(`getFullYear: ${myNewDate.getFullYear()}`);

//4. getHours(): Gets the hour (0–23).

console.log(`getHours: ${myNewDate.getHours()}`);

//5. getMilliseconds() Gets the fraction of a second (0–999).

console.log(`getMilliseconds: ${myNewDate.getMilliseconds()}`);

//6. getMonth() Gets the month (0–11).

console.log(`getMonth: ${myNewDate.getMonth()}`);

//7.getSeconds() Gets the seconds (0–59).

console.log(`getSeconds: ${myNewDate.getSeconds()}`);

//8. getTime() Gets the time, in Unix time (milliseconds since January 1, 1970).

console.log(`getTime: ${myNewDate.getTime()}`);