//Nested If Else If
//var premier; 
var premierMin = 350000;
//var privateClients; 
var privateClientsMin = 750000;
//var privateWealth;
var privateWealthMin = 1800000;
var minYearsEmployed = 5;

var salary = 1850000;
var yearsEmployed = 5;

var accApplication = function (salary, yearsEmployed) {
    if(salary >= premierMin && salary < privateClientsMin) {
        if(yearsEmployed >= minYearsEmployed){
            console.log("Congratulations, you qualify for a Premier Account. Please contact your Banker.");
        }
            else if (salary >= 500000 && years < minYearsEmployed){
                console.log("Congratulations, you qualify for a Premier Account. Please provide proof of income.");
            }
                else{
                    console.log("Sorry, you must have worked at least " + minYearsEmployed + 
                    " at your current job.");
                }
    }else if(salary >= privateClientsMin && salary < privateWealthMin) {
        if(yearsEmployed >= minYearsEmployed){
            console.log("Congratulations, you qualify for a Private Clients Account. Please contact your Banker.");
        }
            else if (salary >= 1000000 && years < minYearsEmployed){
                console.log("Congratulations, you qualify for a Private Clients Account. Please provide proof of income.");
            }
        else{
            console.log("Sorry, you must have worked at least " + minYearsEmployed + 
            " at your current job.");
        }
    }else if(salary >= privateWealthMin) {
        if(yearsEmployed >= minYearsEmployed){
            console.log("Congratulations, you qualify for a Private Wealth Account. Please contact your Banker.");
        }
            else if (salary >= 2500000 && years < minYearsEmployed){
                console.log("Congratulations, you qualify for a Private Wealth Account. Please provide proof of income.");
            }
        else{
            console.log("Sorry, you must have worked at least " + minYearsEmployed + 
            " at your current job.");
        }
    }
    else {
        console.log("Sorry, you must earn at least R" + premierMin + " to qualify for the Premier Account or R" + privateClientsMin + " to qualify for the Private Clients Account or R" + privateWealthMin + " to qualify for the Private Wealth Account");
    }
}

accApplication(351000,5);
