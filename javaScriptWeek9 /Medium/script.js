'use strict';
// make sure to reuturn each function or else... undefined :( ..)
const cutPizzaSlices = function (pizza) {
          
          return function (group) {
                    // Number.parseFloat(pizza).toFixed(2);
                    return `Each person gets ${Number.parseFloat(pizza / group).toFixed(2)} slices of pizza`; 
                     
          }

}
var sharePizza = cutPizzaSlices(8);

console.log(sharePizza(2));
console.log(sharePizza(3)); 

