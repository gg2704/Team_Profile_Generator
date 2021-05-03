// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);

        this.school = school;
    }
    printInfo() {
        console.log(`intern school: ${this.school}`);
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

const intern = new Intern("Foo", 1, "test@test.com", "UCLA");

module.exports = Intern;
