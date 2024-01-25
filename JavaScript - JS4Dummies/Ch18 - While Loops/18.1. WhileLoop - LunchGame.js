//1. Declare globals
var money = 20;
var lunches = 0;

//2. Display lunch budget: 
document.getElementById("money").innerHTML = money;

//3. Add listener for: <button type="button" id="placeOrder">Place Order</button>
document.getElementById("placeOrder").addEventListener("click", buyLunches);

//4. buyLunches(); - buy specific number of sandwitches per day at current prices:
function buyLunches() {
    //call to the resetForm() function:
    resetForm();
    //initialize a variable for tracking the current day,
    var day = 0;

        //Start whileLoop to buy sandwiches until you’re out of money.:
        while (money > 0) {
            day++;
            //get daily sandwich price and assign the return value to a variable.:
            var priceToday = getSandwichPrice();

            //Get the number of sandwiches that the user entered
            var numberOfSandwiches = document.getElementById("numSandwiches").value;

            //Calculate total price:
            var totalPrice = priceToday * numberOfSandwiches;

            //check if balance is enough:
            if (money >= totalPrice) {
                //if bal is enough, subtract the total price from the current money balance.
                money = money - totalPrice;
                
                //increment number of lunches to keep track of how many lunches were purchased:
                lunches++;

                //Output message: price of sandwiches and balance remaining:
                //toFixed() method converts a number to a string, while keeping the number of decimals specified:
                document.getElementById("receipt").innerHTML += 
                    `<p>On day ${day} sandwich price is R${priceToday}. The total for ${numberOfSandwiches} sandwiches is R${totalPrice}. You have R${money.toFixed(2)} left.</p>`;

            //if bal is insufficient, display error message:
            } else {
                document.getElementById("receipt").innerHTML += 
                    `<p>On day ${day} sandwich price is R${priceToday}. Your balance of R${money.toFixed(2)} is insufficient to buy any more.</p>`;
                
                //set the value of money equal to 0 in order to prevent the loop from running again
                money = 0;
            }
        }
    //Display total lunches that User was able to buy after loop exits:
    document.getElementById("receipt").innerHTML += `<p> You were able to buy ${lunches} this week.</p>`;
    }

//getSandwichprice();
function getSandwichPrice() {
    var sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
    return sandwichPrice;
    }

//reset game
function resetForm() {
    money = 20;
    lunches = 0;
    document.getElementById("receipt").innerHTML = "";
}

    