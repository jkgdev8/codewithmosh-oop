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


// Property Descriptors
let person = { name: 'Julienne'};

// for (let key in person)
//  console.log(key, person[key]);

console.log(Object.keys(person));



// mp listings delete all
//jg

