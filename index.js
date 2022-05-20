// OOP vs regular variables and functions
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

//vs
// OOP Encapsulation
let employee = {
    //propeties
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    // methods
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }

};

employee.getWage();


// OOp Abstraction
//