const managerQs = [
    {
        type: 'input',
        message: "What is the team manager's name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the manager's employee ID? ",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the manager's email address? ", 
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the manager's office number? ",
        name: 'officeNumber',
    },
];

const engineerQs = [
    {
        type: 'input',
        message: "What is the engineer's name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID? ",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the engineer's email address? ", 
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub profile? ",
        name: 'github',
    },
];

const internQs = [
    {
        type: 'input',
        message: "What is the intern's name? ",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the intern's employee ID? ",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the intern's email address? ", 
        name: 'email',
    },
    {
        type: 'input',
        message: "What school did the intern attend? ",
        name: 'school',
    },
];

const menuPrompt = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        name: 'nextAction',
        choices: ['Add an engineer', 'Add an intern', 'Finalize team'],
    }
];

const htmlTop = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
<body>
    <div class="container-fluid p-0">
        <div class="container-fluid bg-info p-5">
          <h1 class="text-center">My Team</h1>
        </div>
        <div class="container d-flex justify-content-center" id="employee-list">
`;

const htmlBottom = `
            </div>
        </div>    
    </body>
</html>
`;

function managerCard (name, id, email, officeNumber) {
    return `
    <div class="card col-3">
        <div class="card-header bg-warning p-2">
            <h2>Manager</h2>
            <h3>${name}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
    </div>
    `;
}

function engineerCard (name, id, email, gitHub) {
    return  `
    <div class="card col-3">
        <div class="card-header bg-warning p-2">
            <h2>Engineer</h2>
            <h3>${name}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">GitHub Profile: <a href="http://www.github.com/${gitHub}" target="blank">${gitHub}</a></li>
        </ul>
    </div>
    `
};

function internCard (name, id, email, school) {
    return `
    <div class="card col-3">
        <div class="card-header bg-warning p-2">
            <h2>Intern</h2>
            <h3>${name}</h3>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
    </div>
    `
}

module.exports = {
    managerQs: managerQs, 
    engineerQs: engineerQs, 
    internQs: internQs, 
    menuPrompt: menuPrompt,
    htmlTop: htmlTop,
    htmlBottom: htmlBottom,
    managerCard: managerCard,
    engineerCard: engineerCard,
    internCard: internCard,
};