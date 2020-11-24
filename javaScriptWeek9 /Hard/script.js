"use strict";
class pii {
  #name;
  #ssn;

  constructor(name) {
    this.#name = name;
    this.#ssn = "000-00-0000";
  }

  getName() {
    return this.#name;

    
  }


    // getSsn() {
    //           return this.#ssn
    // }
}

var x1 = new pii("John doe");
var x2 = new pii("jane doe"); 
console.log(x1.getName());
console.log(x2.getName());

// function person() {
//   let pii = {
//     name: "Aaron Moua",
//     ssn: "000-00-0000"

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