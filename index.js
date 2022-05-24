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







