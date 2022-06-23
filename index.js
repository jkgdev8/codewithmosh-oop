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







// // // This Keyword

// // strict mode - js engine will be more sensitive and do error checking
// 'use strict';

// const Circle = function(){
//     this.draw = function(){
//         console.log(this);
//     }
// }

// const c = new Circle();
// // Method Call - Calling a method in an object. THIS keyword will point to the object
// c.draw();

// const draw = c.draw;
// console.log(draw);
// // Function Call - THIS keyword will point to the global object
// draw();


// // By default classes use the 'use strict'; mode
// class Shape{
//     dra(){
//         console.log(this);
//     }
// }

// const s = new Shape();
// const dra = s.dra;
// dra();





// Private Members using symbols(abstraction)
// simple way to implement a private property or method
// const _radius = Symbol();
// const _draw = Symbol();
// class Circle{
//     constructor(radius){
//         // this.radius = radius;
//         this[_radius] = radius;
//     }

//     [_draw](){
        
//     }
// }

// const c = new Circle(1);



// Private members using weakmaps(A dictionary, where keys are objects and values can be anything)

// const _radius = new WeakMap();
// const _move = new WeakMap();
// class Circle{
//     constructor(radius){
//         _radius.set(this, radius);

//         _move.set(this, () =>{
//             console.log('move', this);
//         });
//     }

//     draw(){
//         _move.get(this)();

//         console.log('draw');
//     }
// }

// const c = new Circle(1);
// const s = new Circle(1);



// // Getters & Setters(ES6 classes)
// const _radius = new WeakMap();

// class Circle{
//     constructor(radius){
//         _radius.set(this, radius);
//     }

//     get radius(){
//         return _radius.get(this);
//     }

//     set radius(value){
//         if (value <= 0) throw new Error('Invalid radius')
//         _radius.set(this, value);

//     }
// }

// const c = new Circle(1);







// // Inheritance(ES6)
// class Shape{
//     // If you have a constructor in the parent class and you add a constructor in the child class inside the child
//     // you need to call the parent constructor within the child class to initialize usiing the super keyword
//     constructor(color){
//         this.color = color;
//     }
//     move(){
//         console.log('move');
//     }
// }

// class Circle extends Shape{
//     constructor(color, radius){
//         // referencing the parent consturctor which is Shape
//         super(color);
//         this.radius = radius;


//     }
//     draw(){
//         console.log('draw');
//     }

// }

// const c = new Circle('red', 1);





// Method Overriding(ES6)

class Shape{
    move(){
        console.log('move');
    }
}

class Circle extends Shape{
    move(){
        super.move();
        console.log('circle move');
    }


}

const c = new Circle();












