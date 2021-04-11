// Import required node packages
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Import question sets and HTML templates
const templates = require('./src/templates');

// Array of defined employees
var employees = [];

// Initialize the application by prompting for team manager information
function init() {
    inquirer.prompt(templates.managerQs)
    .then(response => {
        const newMan = new Manager(response.name, response.id, response.email, response.officeNumber);
        employees.push(newMan);
        promptNext();
    });
}

// Prompt the user for the next action
function promptNext() {
    inquirer.prompt(templates.menuPrompt)
    .then(response => {
        switch (response.nextAction) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            default:
                writeToFile();
        }
    });
}

// Add an engineer to the employee list
function addEngineer() {
    inquirer.prompt(templates.engineerQs)
    .then(response => {
        const newEng = new Engineer(response.name, response.id, response.email, response.github);
        employees.push(newEng);
        promptNext();
    })
}

// Add an intern to the employee list
function addIntern() {
    inquirer.prompt(templates.internQs)
    .then(response => {
        const newInt = new Intern(response.name, response.id, response.email, response.school);
        employees.push(newInt);
        promptNext();
    })
}

// Write the collected information to the HTML template
function writeToFile() {
    fs.writeFileSync('./dist/profile.html', '');
    fs.appendFileSync('./dist/profile.html', templates.htmlTop);
    
    for (employee of employees) {
        const role = employee.getRole();
        const name = employee.getName();
        const id = employee.getId();
        const email = employee.getEmail();
        switch (role) {
            case 'Manager':
                const officeNumber = employee.getOfficeNumber();
                fs.appendFileSync('./dist/profile.html', templates.managerCard(name, id, email, officeNumber));
                break;
            case 'Engineer':
                const gitHub = employee.getGitHub();
                fs.appendFileSync('./dist/profile.html', templates.engineerCard(name, id, email, gitHub));
                break;
            case 'Intern':
                const school = employee.getSchool();
                fs.appendFileSync('./dist/profile.html', templates.internCard(name, id, email, school));
                break;
        }
    }
    fs.appendFileSync('./dist/profile.html', templates.htmlBottom);
}

// Function call to initialize app
init();
