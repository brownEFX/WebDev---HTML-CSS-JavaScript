const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
//list.innerHTML = '';
//totalBox.textContent = '';

// number 1 - number of strings, each one containing a product name and price separated by a colon. 
    'Underpants:6.99'
    'Socks:5.99'
    'T-shirt:14.99'
    'Trousers:31.99'
    'Shoes:23.99';

//turn this into an array and store it in an array called products.
var products = [];
products[0] = 'Underpants:6.99';
products[1] = 'Socks:5.99';
products[2] = 'T-shirt:14.99';
products[3] = 'Trousers:31.99';
products[4] = 'Shoes:23.99';

console.log("Array of products and prices: " + products);

var thisString = "Califragilistice";
var thisCharArry = Array.from(thisString);
console.log(thisCharArry);

// number 2 - Access every item in the array using the for...of
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of 


for (const product of products) {
  console.log(product);
}

  // number 3 - splits the current array item (name:price) into two separate items, one containing just the name and one containing just the price. 
  const data = "Manchester, London, Liverpool, Birmingham, Leeds, Carlisle";
  const ukCities = data.split(",");
  console.log(ukCities);
  console.log("Split ukCities: " + ukCities);

  
  // number 4

  // number 5
  let itemText = 0;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);

// number 6

totalBox.textContent = 'Total: $' + total.toFixed(2);
