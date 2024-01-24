//1. Covert charAt:
var myString = "Supercalifragilisticexpialidocious";
var charAtInd = myString.charAt(4);
var stringCharInd = (`This is my string: ${myString} and charAt(4) is ${charAtInd}.`);

document.getElementById("myString").innerHTML = myString.valueOf();
document.getElementById("charAtInd").innerHTML = charAtInd.valueOf();
document.getElementById("stringCharInd").innerHTML = stringCharInd.valueOf();

//2. concat(str1, str2, ...):
var lyrics = ". Say it loud enough and you'll always sound precocious.";
var concatStr =  myString.concat(lyrics);
document.getElementById("concatString").innerHTML = concatStr.valueOf();

//3. toUpperCase();
var upperCaseStr = myString.toUpperCase();
document.getElementById("upperCase").innerHTML = upperCaseStr.valueOf();

//4. toLowerCase();
var lowerCaseStr = upperCaseStr.toLowerCase();
document.getElementById("lowerCase").innerHTML = lowerCaseStr.valueOf();
/*
//1. Covert toString:
var people = ["Tshepo","Kabo","Tebo","Tefo", "Lebo", "Tiro", "Kgosi", "Kabo", "Tshepo"];
var otherPeople = ["Thabo", "Tumi", "Tshidi", "Thabang"];

document.getElementById("peopleIKnow").innerHTML = people.valueOf();

document.getElementById("otherPeople").innerHTML = otherPeople.toString();



//2. Concatenate:

//concat(); - 2 arrays
var allPeople = people.concat(otherPeople);

//This statement writes out the values in the array as a list:
document.getElementById("allMyPeople").innerHTML = allPeople.valueOf(); 

var hoiPolloi = ["Gontse", "Neo", "Naledi"];

//concat(); - 3 arrays
var thePeople = people.concat(otherPeople, hoiPolloi);
console.log(`Three Concatenated Arrays: ${thePeople}`);
//Write out the values in the array as a list:
document.getElementById("thePeople").innerHTML = thePeople.valueOf(); 


//3. indexOf();
var peopleInd = people.indexOf("Tefo");

console.log(`people.IndexOf("Tefo"): ${peopleInd}`);
//Write out the indexOf:
document.getElementById("indexOf").innerHTML = peopleInd.valueOf(); 
 
var peopleMag = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Start from index n - arrayNm.indexOf('element', startFromIndex n));
console.log("indexOf('Nov'), start at Index[n]: " + peopleMag.indexOf('Nov', 9)); // Expected output: 4

document.getElementById("peopleMag").innerHTML = peopleMag.valueOf(); 

//4. join();
var peopleJoin = people.join(" | ");

console.log(`people.join("|"): ${peopleJoin}`);

document.getElementById("peopleJoin").innerHTML = peopleJoin.valueOf(); 

//Example2:
//4. Using variables inside an Array:
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

//5. lastIndexOf();
var peopleLastInd = people.lastIndexOf("Tshepo");

console.log(`people.lastIndexOf("Tshepo"): ${peopleLastInd}`);

document.getElementById("lastIndexOf").innerHTML = peopleLastInd.valueOf(); 


//6. pop();
console.log(`nth element before pop(): ${people[people.length - 1]}`);

var peoplePop = people.pop();

console.log(`popped element: ${peoplePop}`);
console.log(`nth element after pop(): ${people[people.length - 1]}`);

document.getElementById("peoplePop").innerHTML = peoplePop.valueOf(); 

console.log(`people array after pop: `);
console.log(people);


//7. push();
console.log(`nth element before push(): ${people[people.length - 1]}`);
console.log(`people.length before push: ${people.length}`);
people.push(peoplePop);

document.getElementById("peoplePush").innerHTML = people.valueOf();

console.log(`nth element after push(): ${people[people.length - 1]}`);
console.log(`people.length after push: ${people.length}`);

//8. reverse();
console.log(`people array after reverse(): `);
console.log(people);

var peopleReverse = people.reverse();

document.getElementById("peopleReverse").innerHTML = peopleReverse.valueOf();

console.log(`reversed people array: ${peopleReverse}`);
console.log(`people array after reverse(): `);
console.log(people);


//9. shift()
console.log(`1st element before shift(): ${people[0]}`);
console.log(`people.length before shift(): ${people.length}`);

var peopleShift = people.shift();

document.getElementById("peopleShift").innerHTML = peopleShift.valueOf();


console.log(`1st element after shift(): ${people[0]}`);
console.log(`people.length after shift(): ${people.length}`);
console.log(`shifted element: ${peopleShift}`);

console.log(`people array after shift(): `);
console.log(people);


//10. unshift()
console.log(`1st element before unshift(): ${people[0]}`);
console.log(`people.length before unshift(): ${people.length}`);

people.unshift("Kago");

document.getElementById("peopleUnshift").innerHTML = people.valueOf();

console.log(`1st element after unshift(): ${people[0]}`);
console.log(`people.length after unshift(): ${people.length}`);

console.log(`people array after unshift(): `);
console.log(people);


//10. slice()
peopleSlice = people.slice(0,3);
console.log(`people.slice(0,3) returns 3 elements from index[0]: ${peopleSlice}`);

//Example2:
var peopleLength = people.length - 4;

document.getElementById("peopleSlice").innerHTML = peopleSlice.valueOf();

console.log(`people.length - 4: ${peopleLength}`); //console.log(`people.length - 4: ${people.length - 4}`);
peopleSlice2 = people.slice(peopleLength,3);
console.log(`people.slice(peopleLength,3): ${peopleSlice2}`);


//11. sort();
console.log(`people array before sort(): `);
console.log(people);

peopleSort = people.sort();

document.getElementById("peopleSort").innerHTML = peopleSort.valueOf();

console.log(`people array after sort(): ${peopleSort}`);


//12. splice()
//Insert at index[0], do not delete any element, insert "elementName"
console.log(`Element at index[1] before splice(): ${people[1]}`);

people.splice(1, 0, "Katli");

document.getElementById("peopleSplice").innerHTML = people.valueOf();

console.log(`Element at index[1] after splice(): ${people[1]}`);
console.log(people);

//Example2:
var spliceArr = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
console.log(spliceArr);
spliceArr.splice(9, 0, "a", "ab", "abc", "abcd", "abcde");

document.getElementById("spliceArrSplice").innerHTML = spliceArr.valueOf();

console.log(spliceArr);
spliceArr.splice(9, 5, "x", "xy", "xyz");
spliceArr.splice(8, 1);
console.log(spliceArr);

*/
