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



// // Resetting the Constructor
// function Shape(){
// }

// Shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }




// function Circle(radius){
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype)
// // When ever you reset the prototype of an object, you should also reset the constructor
// Circle.prototype.constructor = Circle;


// Circle.prototype.draw = function(){
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1);
// const x = new Circle(2);



// // Calling the Super Constructor
// function Shape(color){
//     this.color = color;
// }

// Shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }


// function Circle(radius, color){
//     // Super Constructor
//     Shape.call(this, color);
//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype)
// // When ever you reset the prototype of an object, you should also reset the constructor
// Circle.prototype.constructor = Circle;


// Circle.prototype.draw = function(){
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1, 'red');







// // Intermediate Function Inheritance
// function Shape(color){
//     this.color = color;
// }

// Shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }

// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
    
// }

// function Circle(radius, color){
//     Shape.call(this, color);
//     this.radius = radius;
// }
// extend(Circle, Shape);



// Circle.prototype.draw = function(){
//     console.log('draw');
// }

// function Square(size){
//     this.size = size;

// }
// extend(Square, Shape);


// const s = new Shape();
// const c = new Circle(1, 'red');
// const sq = new Square('blue');





// // Method Overriding


// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
    
// }
// function Shape(){
    
// }

// Shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }


// function Circle(){

// }

// extend(Circle, Shape);

// Circle.prototype.duplicate = function(){
//     console.log('duplicate circle');
// }


// const c = new Circle(1);





// // Polymorphism(many forms)

// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
    
// }
// function Shape(){
    
// }
// Shape.prototype.duplicate = function(){
//     console.log('duplicate');
// }


// function Circle(){

// }
// extend(Circle, Shape);

// Circle.prototype.duplicate = function(){
//     console.log('duplicate circle');
// }



// function Square(){

// }
// extend(Square, Shape);

// Square.prototype.duplicate = function(){
//     console.log('duplicate square');
// }


// const shapes = [
//     new Circle(),
//     new Square()
// ];


// for(let shape of shapes)
// shape.duplicate();





// When to use Inheritance
// Focus composition vs inheritance, KEEP it to ONE level(hierachy) not many. Animal example




// // Mixins
// // rest operator will collect arguments and turn them into an array with the
// function mixin(target, ...sources){
//     // rest operator spreading the array
//     Object.assign(target, ...sources);

// }
// const canEat = {
//     eat: function(){
//         this.hunger--;
//         console.log('eating');

//     }
// };

// const canWalk = {
//     walk: function(){
//         console.log('walkjubf');

//     }
// };


// const canSwim = {
//     swim: function(){
//         console.log('can swim');
//     }
// };

// function Person(){

// }

// const person = Object.assign({}, canEat, canWalk);
// console.log(person);


// // or use the constructor

// mixin(Person.prototype, canEat, canWalk);
// const person1 = new Person();
// console.log(person1);


// function Goldfish(){

// }

// mixin(Goldfish.prototype, canEat, canSwim);
// const fish = new Goldfish();
// console.log(fish);


// //mixin easier

// function Dog(){

// }
// mixin(Dog.prototype, canEat, canSwim, canWalk);
// const doggie = new Dog();
// console.log(doggie);
// console.log(doggie);


// Exercise - Prototypical Inheritance










