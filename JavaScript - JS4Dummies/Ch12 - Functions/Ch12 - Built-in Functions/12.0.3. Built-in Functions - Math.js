//Math.random()

function getRandomNumber() {
    return (Math.random());
  }
  
  var randomInt = getRandomNumber(); // Expected output: a number from 0 to <1
  document.getElementById("mathRandom").innerHTML = randomInt.valueOf(); 

  //var getRandomInt = getRandomInt1(3);   // Expected output: 0, 1 or 2 
  //document.getElementById("mathRandom").innerHTML = getRandomInt.valueOf(); 
  //console.log(getRandomInt1(1)); // Expected output: 0
  
//Math.round()
function getRandomRnd(max) {
    return Math.round(Math.random() * max);
  }
  
  var randomRnd = getRandomRnd(4); // Expected output: 0, 1 or 2
  document.getElementById("mathRound").innerHTML = randomRnd.valueOf(); 

//Math.floor()
function getRandomFlr(max) {
  return Math.floor(Math.random() * max);
}

var randomFlr = getRandomFlr(4); // Expected output: 0, 1 or 2
document.getElementById("mathFloor").innerHTML = randomFlr.valueOf(); 

//Math.ceil()
function getRandomCei(max) {
  return Math.ceil(Math.random() * max);
}

var randomCei = getRandomFlr(4); // Expected output: 0, 1 or 2
document.getElementById("mathCeil").innerHTML = randomCei.valueOf(); 



