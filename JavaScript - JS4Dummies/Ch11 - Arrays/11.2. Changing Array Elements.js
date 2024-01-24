// Creating an Array:
var people = ["Tshepo","Tebo","Boity", "Jabu", "Zama"];

//Confirm:
console.log(people);

document.getElementById("peopleArray").innerHTML = people.toString();

//Change the value of the first element:
people[0] = "Tumi";
people[1] = "Kabo";
people[2] = "Tiro";
people[3] = "Lebo";
people[4] = "Thibe";
people[5] = "Tefo";
people[6] = "Thabo";
people[7] = "Tefo";
people[8] = "Thabo";

//Confirm:
console.log(people);
document.getElementById("peopleArrayV2").innerHTML = people.toString();

//Modify Array:
people[0] = "Tshepo";
people[1] = "Tebo";
people[2] = "Boity";
people[3] = "Jabu";
people[4] = "Zama";

//Confirm:
console.log(people);
document.getElementById("peopleArrayV3").innerHTML = people.toString();
