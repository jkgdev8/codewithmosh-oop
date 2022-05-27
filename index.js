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





// // Abstraction, hide the details show the essentials. DVD methaphor
// function Circle(radius){
//     this.radius = radius;

//     this.defaultLocation = { x:0, y:0 };

//     this.computeOptimumLocation = function(factor){
//         //...
//     }

//     this.draw = function(){
//         computeOptimumLocation(0.1);
        
//         console.log('draw');
//     }
// }

// const circle = new Circle(10)






// // Private Properties and Methods
// // Abstraction, hide the details show the essentials. DVD methaphor
// function Circle(radius){
//     this.radius = radius;
//     // check the scope with the let
//     let defaultLocation = { x:0, y:0 };

//     let computeOptimumLocation = function(factor){
//         //...
//     }

//     this.draw = function(){
//         computeOptimumLocation(0.1);
//         // defaultLocation
//         // this.radius in order to access the new Circle object
//         console.log('draw');
//     }
// }

// const circle = new Circle(10)





// // Getters and Setters
// function Circle(radius){
//     this.radius = radius;
   
//     let defaultLocation = { x:0, y:0 };

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     };

//     this.draw = function(){
//         console.log('draw');
//     };

//     // getter is a function used to read a property
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         },
//         set: function(value){
//             if (!value.x || !value.y)
//              throw new Error('Invalid Location.');
//             defaultLocation = value;

//         }

//     });
// }
// const circle = new Circle(10);
// circle.defaultLocation = 1;

// circle.draw();


// // practice 2 types of functions
// function circle(greet){
//     return `Hi my name is ${greet}!`
    
// }
// const circle1 = circle('Julienne')
// console.log(circle1);


// const hello = (greet, poop) =>{
//     return `Hi my name is also ${greet} ${poop}`

// }
// const circle2 = hello('Abalos', 'Garcia');
// console.log(circle2);




// Exercise Stopwatch
// my method

// function Stopwatch(duration){
//     this.duration = duration;

//     this.reset = function(){

//     };

//     this.start = function(){

//     };

//     this.stop = function(){

//     };

// };
// const sw = new Stopwatch(0);
// sw.duration;

// Mosh Method
// constructor function
function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running)
        throw new Error('Stopwatch has already started.');

        running = true;

        startTime = new Date();
    };

    this.stop = function(){
        if (!running)
         throw new Error('Stopwatch has not started.');

         running = false;

         endTime = new Date();

         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
         duration += seconds;

    };

    this. reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

    };

    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration;
        }

    });
}
const sw = new Stopwatch(0);