// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github;
    };
    printInfo() {
        console.log(`engineer github username: ${this.github}`);
    };
    getGithub() {
        return this.github
    };
    getRole() {
        return "Engineer";
    }
}

const engineer = new Engineer("Foo", 1, "test@test.com", "GitHubUser");

module.exports = Engineer;