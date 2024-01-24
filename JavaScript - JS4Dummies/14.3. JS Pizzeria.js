//1. Place Order button: <button type="button" id="placeOrder">Place Order</button>
// listen for button clicks - create an event listener for the Place Order button, with a handler function called placeOrder

//Using addEventListener() method:
document.getElementById("placeOrder").addEventListener("click", placeOrder);

    //Using onClick method: document.getElementById("addIt").onclick = addTheThing;

        //Using variable && addEventListener:
            //var placeOrder = document.getElementById("placeOrder");
            //placeOrder.addEventListener("click", placeOrder);

//2. placeOrder Function:

function placeOrder() {
    //get form values:
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    //get price of pizza
    var orderPrice = calculatePrice(numPizzas, typePizza);

    //get delivery price:
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    //create output
    var theOutput = "<p>Thank you for your order.</p>";

    theOutput += `<p>Your order cost is: R${orderPrice}`;

        //birthday:
        if (birthday === "yes"){
            theOutput += "<p>Happy birthday, here's our special treat:</p>";
        }

    // todo: output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += `<p>Your delivery cost is: R${deliveryPrice}</p>`
    }
    /*theOutput += "<p>Your total is: $" + (orderPrice + deliveryPrice);*/
    theOutput += `<p>Your total is: R${(orderPrice + deliveryPrice)}`;

    //display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
}

//Calculate Price:
function calculatePrice(numPizzas, typePizza) {
    //UnitPrice = 10, OrderPrice = UnitPrice * Qty
    var orderPrice = Number(numPizzas) * 10;
    var extraCharge = 0;

    //Calculate extra charge if applicable:
    if(typePizza === "supreme") {
        //Add extra $2 for each Supreme pizza
        extraCharge = Number(numPizzas) * 2;
    }
    orderPrice += extraCharge;
    return orderPrice;
}

//Calculate delivery price:
function calculateDelivery(orderPrice, deliveryCity, birthday) {
    var deliveryPrice = 0;

    //Calculate delivery price if applicable:
    if (((deliveryCity === "anytown") && (orderPrice > 10)) || (birthday === "yes")){
        deliveryPrice = 0;
    } else {
        deliveryPrice = 5;
    }

    return deliveryPrice
}

