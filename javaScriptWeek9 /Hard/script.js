// "use strict";
// class pii {
//   #name;
//   #ssn;

//   constructor(name) {
//     this.#name = name;
//     this.#ssn = "000-00-0000";
//   }

//   getName() {
//     return this.#name;

//   }

//     // getSsn() {
//     //           return this.#ssn
//     // }
// }

// var x1 = new pii("John doe");
// var x2 = new pii("jane doe");
// console.log(x1.getName());
// console.log(x2.getName());

// other way to do it

// function person() {
//   let pii = {
//     name: "Aaron Moua",
//     ssn: "000-00-0000",

//   };
//   return {
//     getName(){
//       return pii.name;
//     }
//   }
// }

// let information = person();
// console.log(information);
// console.log(information.getName());
// console.log(information.ssn);

// REGGIES version
// this is a closure

// function secuirty (name,ssn) {
//   let pii = {
//     name: this.name,
//     ssn: this.ssn,
//     getInfo:function(){
//       console.log(name)
//     }

//   }
//   console.log(pii.getInfo())
// }

// secuirty("Reggie", 123453);

// Latoris version
// this is a closure
// private method and variables 

function security(name, ssn) {
  var pii = {
    name: this.name,
    ssn: this.ssn,
  };
  //when creating a closure
  function getInfo(){
    return name
  }

  getInfo();


security("Reggie", 123456);

}
