'use strict';
const products = [{id: 3, price: 200, } ,{id: 4,price: 900,},{id: 1,price: 1000,},];

console.log(products[0].price);
console.log(products[1].price);
console.log(products[2].price);


for(let i=0; i<products.length; i++){
console.log((products[i].price) - (products[i].price) / 100 * 15);

}
products.forEach(function(products){
    console.log((products.price) - (products.price) / 100 * 15);
})

