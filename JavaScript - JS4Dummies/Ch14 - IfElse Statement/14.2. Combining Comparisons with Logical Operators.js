//Combining Comparisons with Logical Operators
//RULE: a) Is the order over $10? b)Is the customer located within the city limits? THEN: they get free delivery ELSE; delivery charge is $5.

if ((deliveryCity === "Anytown") && (orderPrice > 10)) {
    var deliveryPrice = 0;
} else {
    var deliveryPrice = 5;
}

//Free Delivery on Your Birthday
if (((deliveryCity === "Anytown") && (orderPrice > 10)) ||
    (birthday === "yes")) {
    var deliveryPrice = 0;
} else {
    var deliveryPrice = 5;
}