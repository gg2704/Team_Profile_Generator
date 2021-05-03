// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    printInfo() {
        console.log(`manager office number: ${this.officeNumber}`);
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

const manager = new Manager("Foo", 1, "test@test.com", 100);

module.exports = Manager;