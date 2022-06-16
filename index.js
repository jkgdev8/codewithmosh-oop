// ES6(2015) Classes

// constructor
// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }


// body of the class
// class Circle{
//     // used to initialize objects
//     // used for properties
//     constructor(radius){
//         this.radius = radius;
//         this.move = function(){
//             console.log('move');
//         }


//     }
//     // define methods are defined in the body of the class, if its inside of body it will
//     // result in a prototype
//     draw(){
//         console.log('draw');

//     }
// }

// const c = new Circle(1);
// // ex
// // es6 classes





// // Hoisting(raised to the top)
// sayHello();
// sayGoodbye();
// const c = new Circle


// // Function Declaration(hoisted)
// function sayHello(){

// }

// // Function Expression(not hoisted)
// const sayGoodbye = function(){
    
// };

// const number = 1;


// // Class Decalaration(not hoisted)
// class Circle{
    
// }

// // Class Expression(not hoisted) expression is not used often
// const Square = class{

// };





// // Static Metods

// class Circle{
//     constructor(radius){
//         this.radius = radius;
//     }

//     // Instance Method
//     draw(){

//     }

//     // Static Method(Create utility functions not tied to a particular object )
//     static parse(str){
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius)

//     }
// }

// // const circle = new Circle(1);
// const circle = Circle.parse('{"radius": 1}');
// console.log(circle);


// class Math2{
//     static abs(value){

//     }
// }
// Math2.abs

