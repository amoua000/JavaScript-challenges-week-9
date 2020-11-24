"use strict";
// function average (arr) {
//   let total =0;
//   for(let x =0; x<arr.length;x++){
//     total += arr[x];
//     console.log(`In loop at${x} and the total is ${total}`)
//   }

//   return total/(arr.length-1);

// }

// var arr1 = [1,4,7]
// var arr2 = [10,5]
// var arr3 = [1.5,3,2.5,1]

// console.log(average(arr1));
// console.log(average(arr2));
// console.log(average(arr3));

function averg(numbers) {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
averg([10, 10, 10, 10]);
console.log(averg([1,4,7]));
console.log(averg([10,5]))
console.log(averg([1.5,3,2.5,1]))