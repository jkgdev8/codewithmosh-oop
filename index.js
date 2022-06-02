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

//const c3 = new Circle(2);






