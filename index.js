// ES6(2015) Classes

// constructor
// function Circle(radius){
//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw');
//     }
// }


// body of the class
class Circle{
    // used to initialize objects
    // used for properties
    constructor(radius){
        this.radius = radius;
        this.move = function(){
            console.log('move');
        }


    }
    // define methods are defined in the body of the class, if its inside of body it will
    // result in a prototype
    draw(){
        console.log('draw');

    }
}

const c = new Circle(1);