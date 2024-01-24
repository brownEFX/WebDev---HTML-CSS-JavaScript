//1. newDate():
function getNewDate() {
    return new Date();
  }
  
  var todayDate = getNewDate(); // Expected output: a number from 0 to <1
  document.getElementById("newDate").innerHTML = todayDate; 

//2. getMonth() Method 
 //2.1. getMonth() Method - Get the month(number):
function getMonthByNumber() {
  var dtMonth = new Date();
  var month = dtMonth.getMonth();
  return month;
}

var dateMonth = getMonthByNumber(); // Expected output: a number from 0 to <1
document.getElementById("getMonthNumber").innerHTML = dateMonth; 

//2.2. getMonth() Method - Get the name of the month:
function getMonthByName() {
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var monthDt = new Date();
  var monthNm = months[monthDt.getMonth()];
  return monthNm;
}

var month = getMonthByName();
document.getElementById("getMonthName").innerHTML = month;

//3. getDate() Method 
//3.1. getDate() - Get the day of the month:
function getMonthDay() {
  var currentDt = new Date();
  var day = currentDt.getDate();
  return day;
}

var monthDt = getMonthDay();
document.getElementById("getDayOfMonth").innerHTML = monthDt;

//3.2. getDay() - Get the day of a specific date:
function getSpecificDt() {
  var currentDate = new Date("Dec 02, 2023 12:15:00");
  var day = currentDate.getDate();
  return day;
}

var specificDt = getSpecificDt();
document.getElementById("getSpecificDate").innerHTML = specificDt;

//4. getFullYear()
function getFullYear() {
  var thisDate = new Date("Dec 31, 2022 23:59:59");
  var thisYr = thisDate.getFullYear();
  return thisYr;
}

var fullYear = getFullYear();
document.getElementById("getFullYear").innerHTML = fullYear;