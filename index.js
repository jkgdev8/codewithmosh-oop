// // OOP vs regular variables and functions
// // OOP Procederal
// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// // too many parameters
// function getWage(baseSalary, overtime, rate) {
//     return baseSalary + (overtime * rate);
// }

// //vs
// // OOP Encapsulation
// let employee = {
//     //propeties
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     // methods
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }

// };

// employee.getWage();



// ES6 has classes

// Object Literals
// const circle = {
//     radius: 1,
//     location:{
//         x: 1, 
//         y: 1
//     },
//     draw: function(){
//         console.log('draw');
//     }
// };

// circle.draw();




// Factory functions
// function createCircle(radius){
//     return{
//         radius,
//         draw: function(){
//             console.log('still works');
//         }
//     }
// }

// const circle = createCircle(1);

// console.log(circle);
// console.log(circle.draw(0));



// Constructor functions
// function Circle (radius){
//     console.log('this', this);
//     this.radius = radius,
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// // the new will reference the latter object cause of 'this' without it it will reference the window
// const another = new Circle(1)

// console.log(another);




// // Value vs reference types

// // value type
// let x = 10;
// let y = x;

// x = 20
// console.log(x);
// console.log(y
//     );
// // reference type
// let obj = {value: 10};

// function increase(obj){
//     obj.value++;
// }

// increase(obj);
// console.log(obj);




// Adding or removing properties
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(10)

// circle.location = {x: 1};

// console.log(circle);



// // Enumerating Properties
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
// }

// const circle = new Circle(10)

// // use for in loop to enumerate objects 
// for (let key in circle){
//     if (typeof circle[key] !== 'function')
//     console.log(key, circle[key]);
// }

// // to get all the keys in an object, use Object.keys
// const keys = Object.keys(circle);
// console.log(keys);

// // checking a property or method in an object use the in operator
// if ('radius' in circle)
//  console.log('Circle has a radius');





// Abstraction, hide the details show the essentials. DVD methaphor
function Circle(radius){
    this.radius = radius;

    this.defaultLocation = { x:0, y:0 };

    this.computeOptimumLocation = function(factor){
        //...
    }

    this.draw = function(){
        this.computeOptimumLocation();
        console.log('draw');
    }
}

const circle = new Circle(10)