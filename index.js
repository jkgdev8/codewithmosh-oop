// // // Prototype Inheritance

// function Shape(){
// }

// Shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }




// function Circle(radius){
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype)


// Circle.prototype.draw = function(){
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1);
// const x = new Circle(2);



// Resetting the Constructor
function Shape(){
}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}




function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype)
// When ever you reset the prototype of an object, you should also reset the constructor
Circle.prototype.constructor = Circle;


Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
const x = new Circle(2);
