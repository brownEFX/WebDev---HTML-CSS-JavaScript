//1. Create Variables:
//Create days of week array:
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//Define types of weather:
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];

//Set min and max temperatures:
var maxTemp = 110;
var minTemp = 32;

//Cost (to you) of a cup of lemonade:
var lemonadeCost = 0.5;

//Array for storing daily temps:
var dailyTemp = [];

// listen for order
document.getElementById("OpenTheStand").addEventListener("click", openTheStand);

// make the week's weather
generateWeather();

//2. Generating weather Generates weather for the week:

function generateWeather() {
	//2.1. variables to hold current weather and temperature:
    var weatherToday;
    var tempToday;
	
	//2.2. Loop through each day of the week:
    for (var i = 0; i < days.length; i++) {
        //2.3. Get random element from weather[] and assign it to weatherToday:
		weatherToday = weather[Math.floor(Math.random() * weather.length)];
		//2.4. Get random temperature between minTemp and maxTemp:
        tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
		//2.5. Store the temperature in dailyTemp[];
        dailyTemp[i] = tempToday;
		
		//2.6. Output a message describing the day’s weather.
        document.getElementById("5DayWeather").innerHTML
            += "<div id='" + days[i] + "' class='" + weatherToday + 
            "'><b>Forecast for " + days[i] + ":</b><br><br>" + weatherToday + 
            " and " + tempToday + " degrees.</div>";
    }
}

//3. Opening the Stand:
//Calculate glasses of lemonade:
function openTheStand() {
	//3.1. Variable - daily number of glasses sold
    var glassesSold = 0; // daily
	//3.2. Variable - Weekly total: 
    var totalGlasses = 0; // weekly
	//3.3. Variable - Number of glasses left to sell:
    var glassesLeft = 0; // left to sell
    
	//Clear previous results
    //3.4. Call resetForm(); to Reset report area so it can be run multiple times without restarting the game:
    resetForm();
	
    //3.5. Get values from form fields:
	//3.5.6. Number of glasses:
    var numGlasses = Number(document.getElementById("numGlasses").value);
	//3.5.6. glassPrice:
    var glassPrice = Number(document.getElementById("glassPrice").value);
	
    for (var i = 0; i < days.length; i++) {
        //3.7. Calculate number of glasses sold [depends on temperature and price]:
        glassesSold = Math.floor(dailyTemp[i] / glassPrice);
        //3.7. How many glasses left:
        glassesLeft = numGlasses - totalGlasses;
        //3.8. Check lemonade stock level:
        if (glassesSold > glassesLeft) {
            glassesSold = glassesLeft;
        }
        //3.9. Update glasses sold: increase the weekly total
        totalGlasses = glassesSold + totalGlasses;
        //3.10. Display daily totals:
        document.getElementById("result").innerHTML +=
            "<p>" + days[i] + ", you sold " + glassesSold +
            " glasses of lemonade.</p>";
    }
	//4. Call displayResult();
    displayResults(numGlasses, glassPrice, totalGlasses);
}

//6. Displaying a report: displayResults() to calculate weekly results using arguments from openTheStand();
function displayResults(weeklyInventory, glassPrice, weeklySales) {
    // calculate results
	//6.1. Calculate total revenue
    var revenue = weeklySales * glassPrice;
	
	//6.2. Calculate expenses
    var expense = weeklyInventory * lemonadeCost;
	
	//6.3. Calculate how many glasses are left 
    var leftOver = weeklyInventory - weeklySales;
	
	//6.4. Calculate profit 
    var profit = revenue - expense;
    // print out the weekly report
    document.getElementById("result").innerHTML += "<p>You sold a total of " + weeklySales + " glasses of lemonade this week.</p > ";
    document.getElementById("result").innerHTML += "<p>Total revenue: $" + revenue + ".</p>";
    document.getElementById("result").innerHTML += "<p>You have " + leftOver + " glasses of lemonade left over.</p > ";
    document.getElementById("result").innerHTML +=
        "<p>Each glass costs you $" + lemonadeCost + ". Your profit was $" + profit + ".";
}

//5. Resetting the program - resets the game so that a new order can be placed
function resetForm() {
    document.getElementById("result").innerHTML = "";
}


































