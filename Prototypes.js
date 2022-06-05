// Prototypes


// Inheritance - enables an object to take on the properties and methods of another object(reusable)
// Prototype is the parent of another object
// When accessing a property or a method on an object, javascript engine walks up the protype chain to find the target member


// Prototypes, once declared both of the x and y variable objects have a parent called 'Objectbase'
// let x ={};
// let y = {};



// // Multilevel Inheritance
// // Objects created by a given constructor will have the same prototype
// // All Arrays created by the array constructor will have the same prototype
// function Circle(radius){
//     this.radius = radius;

//    this.draw = function(){
//        console.log('draw');
//    };
// }

// const circle = new Circle(10);


// // Property Descriptors
// let person = { name: 'Julienne'};
// Object.defineProperty(person, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// person.name='John'
// // unable to enmurate as well as configure cause the property is false
// console.log(Object.keys(person));

// console.log(person);


// // let objectBase = Object.getPrototypeOf(person);
// // // unable to enumerate
// // let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// // console.log(descriptor);

// // for (let key in person)
// //  console.log(key);

// // console.log(Object.keys(person));








// Constructor Protoypes


// function Circle(radius){
//     this.radius = radius;
// }

// const circle = new Circle(1);
// console.log('hello');









// // Protype vs Instance members

// function Circle(radius){
//     // Instance properties and methods
//     this.radius = radius;

//     this.move = function(){
//         console.log('move');
//     }
// }

// // Prototype members
// Circle.prototype.draw = function(){
//     this.move();
//     console.log('draw');

// }


// Circle.prototype.toString = function(){
//     return 'Circle with a radius ' + this.radius;
// }

// const c1 = new Circle(1);
// const c2 = new Circle(1);
// const c3 = new Circle(2);
// const c4 = new Circle(1);





// // Iterating Instance and Prototype Members
// function Circle(radius){
//     // Instance properties and methods
//     this.radius = radius;

//     this.move = function(){
//         console.log('move');
//     }
// }


// const c1 = new Circle(1);

// // Prototype members
// Circle.prototype.draw = function(){
//     console.log('draw');

// }
// // draw will not show up due to it being a prototype member, it will only return instance members
// console.log(Object.keys(c1));

// // For in lop returns all memebers, instance and prototype
// for (let key in c1)
// console.log(key);







// // Avoid Extending the built in objects
// Array.prototype.shuffle = function(){
//     // ..

// }
// const array = [];
// array.shuffle();

// // dont overide methods or built in objects, you can mess up future libraries




// Excercise Stopwatch
// My Method

// function Stopwatch(){
//     let startTime, endTime, running, duration = 0;
    
//     Object.defineProperty(this, 'duration',{
//         get: function(){
//             return duration;
//         }

//     });
// }

// Stopwatch.prototype.start = function(){
//     if (this.running)
//         throw new Error('Stopwatch has already started.');

//         this.runningrunning = true;

//         startTime = new Date();
// }

// Stopwatch.prototype.stop = function(){
//     if (!running)
//          throw new Error('Stopwatch has not started.');

//          running = false;

//          endTime = new Date();

//          const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//          duration += seconds;

// }

// Stopwatch.prototype.reset = function(){
//     startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
// }

// // document


// // Mosh Method

// function Stopwatch(){
//     let startTime, endTime, running, duration = 0;
    
//     Object.defineProperty(this, 'duration',{
//         get: function(){
//             return duration;
//         },
//         set: function(value){duration = value}
//     });
//     Object.defineProperty(this, 'startTime',{
//         get: function(){
//             return startTime;
//         }
//     });
//     Object.defineProperty(this, 'endTime',{
//         get: function(){
//             return endTime;
//         }
//     });
//     Object.defineProperty(this, 'running',{
//         get: function(){
//             return running;
//         }
//     });
// }

// Stopwatch.prototype.start = function(){
//     if (this.running)
//         throw new Error('Stopwatch has already started.');

//         this.running = true;

//         this.startTime = new Date();
// }

// Stopwatch.prototype.stop = function(){
//     if (!this.running)
//          throw new Error('Stopwatch has not started.');

//          this.running = false;

//          this.endTime = new Date();

//          const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//          this.duration += seconds;

// }

// Stopwatch.prototype.reset = function(){
//     this.startTime = null;
//     this.endTime = null;
//     this.running = false;
//     this.duration = 0;
// }


// // The fact that you can create a new object, it completely renders the object created
// // This exercise was created for you to show how not to use OOP abstraction. 
// const sw = new Stopwatch();
// sw.duration = 10;







