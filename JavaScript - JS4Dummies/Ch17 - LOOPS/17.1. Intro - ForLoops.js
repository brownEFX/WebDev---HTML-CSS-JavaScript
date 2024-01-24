//Hello
for (var counter = 0; counter < 5; counter++) {
    console.log(`${counter}: Hello javaScript`)
}

//Writing and Using forLoops:
//1. Countdown
for (var i = 3; i > 0; i--) {
    alert(i);
}

alert("Blast off!");

//2. Looping through Arrays:
var whatsAppGroup = ["Tumi", "Tshepo", "Kagi", "Kamo", "Pule", "Thabo", "Kgosi"];
console.log(`This is my JS whatsApp group: ${whatsAppGroup.join(", ")}`) 

for (var i = 0; i < (whatsAppGroup.length - 5); i++) {
    console.log(`${whatsAppGroup[i]} is in my JavaScript whatsApp group`);
}