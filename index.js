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
const circle = {
    radius: 1,
    location:{
        x: 1, 
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

circle.draw();