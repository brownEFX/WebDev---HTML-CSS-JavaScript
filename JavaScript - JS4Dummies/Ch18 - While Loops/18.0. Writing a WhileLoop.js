//whileLoop - Looping a certain number of times
var i = 0;
while (i < 5) {
    console.log(i + ": Magic with JavaScript!");
    i++;
}

//Count Down with while
var count = 3;
while (count > 0) {
    alert(count);
    count--;
}
alert("Blast Off!");

//Looping through an array with while
var jsThings = ["Arrays","Objects","Functions","Loops"];
var i = 0;
while (jsThings[i]) {
alert(jsThings[i]);
i++;
}
//
var money = 10;

while (money > 0) {
    console.log(`Balance ${money}`);
    money--;
}

/*
    while (money > 0) {
        buyThings();
        saveMoney();
        payTaxes();
        }
*/