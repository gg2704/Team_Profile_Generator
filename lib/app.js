const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./Develop/lib/htmlRenderer");

let team = [];

function createManager() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'Quit',
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employee office number?',
        },
    ])
    .then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager);
        console.log(manager, team);
        createTeamMember();
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the employee github account?',
        },
    ])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            console.log(engineer, team);
            createTeamMember();
        })
}

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the employee school?',
        },
    ])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            team.push(intern);
            console.log(intern, team);
            createTeamMember();
        })
}


function createTeamMember() {
    console.log('Profile created!')
                renderHTML()
}

function renderHTML() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFile(outputPath, render(team), err => {
        if (err) {
        throw(err);
    }
})
}

createManager();
