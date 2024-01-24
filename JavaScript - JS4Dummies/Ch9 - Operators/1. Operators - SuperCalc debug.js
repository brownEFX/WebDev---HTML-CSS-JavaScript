//Date


const currentDate = new Date();
document.getElementById("today").innerHTML = currentDate;

//Operate button is clicked
document.getElementById("submit").addEventListener("click", calculateIt);

function calculateIt() {

    //get the operand1
    var operand1 = document.getElementById("operand1").value;
    //get the operand1 type
    var select1 = document.getElementById("operand1-type");
    var operand1type = select1.value;
    //convert the operand
    switch (operand1type) {
        case "string":
            operand1 = String(operand1);
            break;
        case "number":
            operand1 = Number(operand1);
            break;
    }

    //get the operator
    var radios = document.getElementsByName('operator');

    //get the operand2
    var operand2 = document.getElementById("operand2").value;
    //get the operand2 type
    var select2 = document.getElementById("operand2-type");
    var operand2type = select2.value;
    //convert the operand
    switch (operand2type) {
        case "string":
            operand2 = String(operand2);
            break;
        case "number":
            operand2 = Number(operand2);
            break;
    }


    //create variables to store checked operator
    var myOperator;

    //loop through each possible operand value and find the checked one
    for (var i = 0, length = radios.length; i < length; i++) {

        if (radios[i].checked) {
            myOperator = radios[i].value;

            //do a different operation depending on which operator was selected
            switch (radios[i].value) {
                case "+":
                    returnValue = operand1 + operand2;
                    break;
                case "-":
                    returnValue = operand1 - operand2;
                    break;
                case "*":
                    returnValue = operand1 * operand2;
                    break;
                case "/":
                    returnValue = operand1 / operand2;
                    break;
                case "%":
                    returnValue = operand1 % operand2;
                    break;
                case "concat":
                    returnValue = operand1 + operand2;
                    myOperator = "+";
                    break;
                case "==":
                    returnValue = operand1 == operand2;
                    break;
                case "===":
                    returnValue = operand1 === operand2;
                    break;
                case "!=":
                    returnValue = operand1 != operand2;
                    break;
                case "!==":
                    returnValue = operand1 !== operand2;
                    break;
                case ">":
                    returnValue = operand1 > operand2;
                    break;
                case ">=":
                    returnValue = operand1 >= operand2;
                    break;
                case "<":
                    returnValue = operand1 < operand2;
                    break;
                case "<=":
                    returnValue = operand1 <= operand2;
                    break;
            }

            break;
        }
    }


    //Output: display the operation for operand1
    if (typeof (operand1) === "string") {
        operand1 = '"' + operand1 + '"';
    };

    //Output: display the operation for operand1
    if (typeof (operand2) === "string") {
        operand2 = '"' + operand2 + '"';
    };

    //Final Operation
    document.getElementById("final-operation").innerHTML = operand1 + myOperator + operand2;

    //create variables to store result of the calc
    var returnValue;

    //display the return value
    document.getElementById("result").innerHTML = returnValue;
};