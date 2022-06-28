// commonjs method(node)
// const _radius = new WeakMap();
    
// class Circle{
//     constructor(radius){
//         _radius.set(this, radius);
//     }
//     draw(){
//         console.log('Circle with radius' + _radius.get(this));
//     }
// }

// module.exports = Circle;




// Es6 modules(browser)
const _radius = new WeakMap();
export class Circle{
    constructor(radius){
        _radius.set(this, radius);
    }
    draw(){
        console.log('Circle with radius' + _radius.get(this));
    }
}

