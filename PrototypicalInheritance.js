// // // // Prototype Inheritance

// // function Shape(){
// // }

// // Shape.prototype.duplicate = function(){
// //     console.log('duplicate');
// // }




// // function Circle(radius){
// //     this.radius = radius;
// // }

// // Circle.prototype = Object.create(Shape.prototype)


// // Circle.prototype.draw = function(){
// //     console.log('draw');
// // }

// // const s = new Shape();
// // const c = new Circle(1);
// // const x = new Circle(2);



// // // Resetting the Constructor
// // function Shape(){
// // }

// // Shape.prototype.duplicate = function(){
// //     console.log('duplicate');
// // }




// // function Circle(radius){
// //     this.radius = radius;
// // }

// // Circle.prototype = Object.create(Shape.prototype)
// // // When ever you reset the prototype of an object, you should also reset the constructor
// // Circle.prototype.constructor = Circle;


// // Circle.prototype.draw = function(){
// //     console.log('draw');
// // }

// // const s = new Shape();
// // const c = new Circle(1);
// // const x = new Circle(2);



// // // Calling the Super Constructor
// // function Shape(color){
// //     this.color = color;
// // }

// // Shape.prototype.duplicate = function(){
// //     console.log('duplicate');
// // }


// // function Circle(radius, color){
// //     // Super Constructor
// //     Shape.call(this, color);
// //     this.radius = radius;
// // }

// // Circle.prototype = Object.create(Shape.prototype)
// // // When ever you reset the prototype of an object, you should also reset the constructor
// // Circle.prototype.constructor = Circle;


// // Circle.prototype.draw = function(){
// //     console.log('draw');
// // }

// // const s = new Shape();
// // const c = new Circle(1, 'red');







// // // Intermediate Function Inheritance
// // function Shape(color){
// //     this.color = color;
// // }

// // Shape.prototype.duplicate = function(){
// //     console.log('duplicate');
// // }

// // function extend(Child, Parent){
// //     Child.prototype = Object.create(Parent.prototype);
// //     Child.prototype.constructor = Child;
    
// // }

// // function Circle(radius, color){
// //     Shape.call(this, color);
// //     this.radius = radius;
// // }
// // extend(Circle, Shape);



// // Circle.prototype.draw = function(){
// //     console.log('draw');
// // }

// // function Square(size){
// //     this.size = size;

// // }
// // extend(Square, Shape);


// // const s = new Shape();
// // const c = new Circle(1, 'red');
// // const sq = new Square('blue');





// // // Method Overriding


// // function extend(Child, Parent){
// //     Child.prototype = Object.create(Parent.prototype);
// //     Child.prototype.constructor = Child;
    
// // }
// // function Shape(){
    
// // }

// // Shape.prototype.duplicate = function(){
// //     console.log('duplicate');
// // }


// // function Circle(){

// // }

// // extend(Circle, Shape);

// // Circle.prototype.duplicate = function(){
// //     console.log('duplicate circle');
// // }


// // const c = new Circle(1);





// // // Polymorphism(many forms)

// // function extend(Child, Parent){
// //     Child.prototype = Object.create(Parent.prototype);
// //     Child.prototype.constructor = Child;
    
// // }
// // function Shape(){
    
// // }
// // Shape.prototype.duplicate = function(){
// //     console.log('duplicate');
// // }


// // function Circle(){

// // }
// // extend(Circle, Shape);

// // Circle.prototype.duplicate = function(){
// //     console.log('duplicate circle');
// // }



// // function Square(){

// // }
// // extend(Square, Shape);

// // Square.prototype.duplicate = function(){
// //     console.log('duplicate square');
// // }


// // const shapes = [
// //     new Circle(),
// //     new Square()
// // ];


// // for(let shape of shapes)
// // shape.duplicate();





// // When to use Inheritance
// // Focus composition vs inheritance, KEEP it to ONE level(hierachy) not many. Animal example




// // // Mixins
// // // rest operator will collect arguments and turn them into an array with the
// // function mixin(target, ...sources){
// //     // rest operator spreading the array
// //     Object.assign(target, ...sources);

// // }
// // const canEat = {
// //     eat: function(){
// //         this.hunger--;
// //         console.log('eating');

// //     }
// // };

// // const canWalk = {
// //     walk: function(){
// //         console.log('walkjubf');

// //     }
// // };


// // const canSwim = {
// //     swim: function(){
// //         console.log('can swim');
// //     }
// // };

// // function Person(){

// // }

// // const person = Object.assign({}, canEat, canWalk);
// // console.log(person);


// // // or use the constructor

// // mixin(Person.prototype, canEat, canWalk);
// // const person1 = new Person();
// // console.log(person1);


// // function Goldfish(){

// // }

// // mixin(Goldfish.prototype, canEat, canSwim);
// // const fish = new Goldfish();
// // console.log(fish);


// // //mixin easier

// // function Dog(){

// // }
// // mixin(Dog.prototype, canEat, canSwim, canWalk);
// // const doggie = new Dog();
// // console.log(doggie);
// // console.log(doggie);


// // Exercise - Prototypical Inheritance
// // My Method
// // function HtmlElement(){
// //     this.click = function(){
// //         console.log('click');
// //     }

// // }

// // HtmlElement.prototype.focus = function(){
// //     console.log('focus');
// // }

// // const e = new HtmlElement();
// // console.log(e);


// // function HtmlSelectElement(){
// //     // HtmlElement.call(this)
// //     this.addItem = function(item){
// //         console.log('add item');
// //     },
// //     this.items = [],

// //     this.removeItem = function(item){
// //         console.log('remove item');
// //     }

// // }
// // HtmlSelectElement.prototype = Object.create(HtmlElement.prototype)
// // // When ever you reset the prototype of an object, you should also reset the constructor
// // HtmlSelectElement.prototype.constructor = HtmlElement;

// // const s = new HtmlSelectElement();
// // console.log(s);

// // // Exercise
// // // Mosh Method
// // function HtmlElement(){
// //     this.click = function(){
// //         console.log('click');
// //     }

// // }

// // HtmlElement.prototype.focus = function(){
// //     console.log('focus');
// // }


// // function HtmlSelectElement(items = []){
// //    this.items = items;

// //    this.addItem = function(item){
// //        this.items.push(item);
// //    }

// //    this.removeItem = function(item){
// //        this.items.splice(this.items.indexOf(item), 1);
// //    }

// // }

// // HtmlSelectElement.prototype = new HtmlElement();
// // HtmlSelectElement.prototype.constructor = HtmlSelectElement
// // //vs
// // // if you did object create.prototype, only the focus method would show up and not the click, 
// // // since click is located in the base HtmlElement
// // // HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); 



// // Exercise Polymorphism
// // // My Method

// // function extend(Child, Parent){
// //     Child.prototype = Object.create(Parent.prototype);
// //     Child.prototype.constructor = Child;
// // }
// // function HtmlElement(){
// //     this.click = function(){
// //         console.log('click');
// //     }

// // }

// // HtmlElement.prototype.focus = function(){
// //     console.log('focus');
// // }


// // function HtmlSelectElement(items = []){
// //    this.items = items;

// //    this.addItem = function(item){
// //        this.items.push(item);
// //    }

// //    this.removeItem = function(item){
// //        this.items.splice(this.items.indexOf(item), 1);
// //    }

// //    this.render = function(item){
// //        console.log('render');
       

// //    }

// // }

// // function HtmlImgElement(){
// //     this.HtmlImgElement = HtmlImgElement
    
// // }

// // extend(HtmlImgElement,HtmlSelectElement)

// // HtmlSelectElement.prototype = new HtmlElement();
// // HtmlSelectElement.prototype.constructor = HtmlSelectElement

// // const s = new HtmlSelectElement();

// // const elements = [
// //     new HtmlSelectElement([1, 2, 3]),
// //     new HtmlImgElement('http://')
// // ];
// // for(let element of elements)
// // console.log(element.render());

// // // exercise



// // Mosh Method
// function extend(Child, Parent){
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
// function HtmlElement(){
//     this.click = function(){
//         console.log('click');
//     }

// }

// HtmlElement.prototype.focus = function(){
//     console.log('focus');
// }


// function HtmlSelectElement(items = []){
//    this.items = items;

//    this.addItem = function(item){
//        this.items.push(item);
//    }

//    this.removeItem = function(item){
//        this.items.splice(this.items.indexOf(item), 1);
//       }
//         // map method returns an array
//    this.render = function(){
//        return  `
//        <select>${this.items.map(item =>`
//        <option>${item}</option>`).join('')}
//        </select>`;
       
//    }

// }

// function HtmlImgElement(src){
//     this.src = src;

//     this.render = function(){
//         return `<img src="${this.src} />`
//     }
    
// }

// HtmlImgElement.prototype = new HtmlElement();
// HtmlImgElement.prototype.constructor = new HtmlElement;


// extend(HtmlImgElement,HtmlSelectElement)

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement

// const s = new HtmlSelectElement();

// const elements = [
//     new HtmlSelectElement([1, 2, 3]),
//     new HtmlImgElement('http://')
// ];
// for(let element of elements)
// console.log(element.render());











