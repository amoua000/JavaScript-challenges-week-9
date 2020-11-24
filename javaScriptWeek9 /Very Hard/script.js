// "use strict";
// class Person {
//   name;
//   job;
//   age;

//   constructor(name, job, age) {
//     // were setting this objects fields
//     this.name = name;
//     this.job = job;
//     this.age = age;
//   }

//   excercise() {
//     console.log(`Cardio is fun! - said no one ever :( `);
//   }

//   fetchjob() {
//     console.log(`${this.name} is a ${this.job}`);
//   }
// }

// var p1 = new Person("aaron", "R2H", 26);

// p1.excercise();
// p1.fetchjob();

// //

// class Programmer extends Person {
// //   name;
// //   job;
// //   age;
// //   languages;
// //   busy;

//   constructor(name, job, age, languages) {
//     // super calls the parent
//     super(name, job, age);
//     this.languages = languages;
//     this.busy = true;
//   }

//   completeTask() {
//     this.busy = false;
//   }

//   acceptNewTask() {
//     this.busy = true;
//   }

//   offerNewTask() {
//     if (this.busy) {
//       console.log(`${this.name} cant accept anymore jobs right now`);
//     } else {
//       console.log(`${this.name} would love to take a new responsiblity`);
//     }
//   }

//   learnLanguage(newLang){
//     // for (let i = 0; i < arguments.length; i++) {
//           this.languages.push(newLang);
//           // this.languages.push(arguments[i]);
//   }

//   listLanguages(){
//           //   for(var x = 0; x<this.languages.length; x++){
//           //             console.log(this.languages[x])

//           console.log(this.languages);
//             }

// }

// var p3 = new Programmer("Nick", "programmer",26,["Python"]);
// var p2 = new Programmer("Jordan", "Mechanic",25,["Javascript"]);

// console.log(p2.busy);
// p2.completeTask();
// console.log(p2.busy);
// p2.acceptNewTask();
// console.log(p2.busy);
// p2.completeTask();
// p2.offerNewTask();
// console.log(p2.languages);
// p2.learnLanguage("mySQL");
// p2.listLanguages();

// console.log(p3.busy);
// p3.completeTask();
// console.log(p3.busy);
// p3.acceptNewTask();
// console.log(p3.busy);
// p3.completeTask();
// p3.offerNewTask();
// console.log(p3.languages);
// p3.learnLanguage("German");
// p3.listLanguages();

// Reggies version

class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  // you can do Person.protoype.fetchJob method
  fetchjob = function () {
    console.log(`${this.name} is a ${this.job}`);
  };

  excercise = function () {
    console.log(`${this.name} Cardio is fun! - said no one ever :( `);
  };
}


class Programmer extends Person {
  //pass in languages 
  constructor(name,job,age,languages){
    // super called will call functions from the parent constructor
    super(name,job,age);
    this.languages = languages;
    this.busy = true; 


    }
  }
  completeTask = function(){
    this.busy = false;

  }
  acceptNewTask = function(){
    this.busy = true; 
  }
offerNewTask -  function(){
  if(this.busy)
  console.log(`${this.name} is not free to get tasks`);
 else 
  console.log(`${this.name} would love to take new tasks`)

}
learnLanguage = function(language){
  this.languages.push(learn);
}
listLanguages = function(){
  console.log(this.languages);
}

