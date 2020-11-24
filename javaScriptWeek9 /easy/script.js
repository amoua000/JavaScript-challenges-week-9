"use strict";

// function exercise (excercises) {
// return `Todays excercise : ${excercises}`

// }

// var run = exercise('running');
// var swim = exercise('swimming');

// console.log(run());
// console.log(swim());

const exercise = function (workout) {

  return  function () {

    return `Todays exercise: ${workout}`;

    // console.log('Todays exercise:', workout);
  };
};
// saving the function exercise into a varibale called run
var run = exercise("running");
console.log(run());
var swim = exercise("swimming");
console.log(swim());

// var exercise = function (workout) {
//   return (`Today workout: ${workout} `)
// };
// var run = function () {
//   return exercise(`running`);
// }
// ​
// var swim = function () {
//   return exercise(`swimming`);
// }
// console.log(run());
