//days[];
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

//weather[];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm","Foggy"];

//minTemp[];
var minTemp = 0;

//maxTemp[];
var maxTemp = 100;

//call generateWeather();
generateWeather();

//generateWeather():
function generateWeather(){
    //loop through each of the days of the week.
    for (var i = 0; i < days.length; i++){
        //get a random element from the weather array.
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];

        //get a random temperature between the values of your minTemp and maxTemp variables.
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);

        //output the values of weatherToday and tempToday inside the div element
        //<div id='" + days[i]: adds the name of the day of the week as an ID attribute
        // class='" + weatherToday adds type of weather as a class attribute.: <br><br>
        document.getElementById("5DayWeather").innerHTML += 
        "<div id='" + days[i] + "' class='" + weatherToday + "'><b>Forecast for " + days[i] + 
        ":</b> " + weatherToday + " and " + tempToday + " degrees.</div>";
    }
}
