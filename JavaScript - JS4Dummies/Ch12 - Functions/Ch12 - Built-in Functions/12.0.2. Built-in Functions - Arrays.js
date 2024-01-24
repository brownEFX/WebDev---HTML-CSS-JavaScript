var people = ["Tshepo","Kabo","Tebo","Tefo", "Lebo", "Tiro", "Kgosi", "Kabo", "Tshepo"];
var otherPeople = ["Thabo", "Tumi", "Tshidi", "Thabang"];

document.getElementById("peopleArr").innerHTML = people.valueOf(); 

//join();
var peopleJoin = people.join(" | ");

console.log(`people.join("|"): ${peopleJoin}`);

document.getElementById("peopleJoin").innerHTML = peopleJoin.valueOf(); 

//Example2: Using variables inside an Array:
var title = "Mr.";
var firstName = "Karabo";
var middleName = "Brown";
var lastName = "Tabane";
var developer = [title, firstName, middleName, lastName];
console.log(`My name is ${developer.join(" ")}. I am a web developer`); 

document.getElementById("arrayVariables").innerHTML = developer.join(" ").valueOf(); 

//var webDev = developer.join(" ");
var webDev = (`My name is ${developer.join(" ")}. I am a web developer.`); 

document.getElementById("arrVarJoin").innerHTML = webDev.valueOf(); 

//6. pop();

var peoplePop = people.pop();

document.getElementById("peoplePop").innerHTML = peoplePop.valueOf(); 

console.log(`people array after pop: `);
console.log(people);

//7. push();
people.push(peoplePop);

document.getElementById("peoplePush").innerHTML = people.valueOf();

//10. unshift()

people.unshift("Kago");

document.getElementById("peopleUnshift").innerHTML = people.valueOf();

//9. shift()

var peopleShift = people.shift();

document.getElementById("peopleShift").innerHTML = peopleShift.valueOf();



