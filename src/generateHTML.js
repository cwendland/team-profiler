const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');


function generateCard(employees) {
    let resultCards = '';
    employees.forEach(employee => {
        if(employee instanceof Manager) {
            resultCards = resultCards + `        <div class="card">
                <p class="name">${employee.name}</p>
                <p class="role">${employee.constructor.name}</p>
                <div class="container">
                    <p class="id">ID: ${employee.id}</p>
                    <p class="email">Email: <a href="${employee.email}">${employee.email}</a></p>
                    <p class="office-num">Office Num: ${employee.getOfficeNumber()}</p>
                </div>
            </div>`;
        }
        else if(employee instanceof Engineer) {
            resultCards = resultCards + `        <div class="card">
                <p class="name">${employee.name}</p>
                <p class="role">${employee.constructor.name}</p>
                <div class="container">
                    <p class="id">ID: ${employee.id}</p>
                    <p class="email">Email: <a href="${employee.email}">${employee.email}</a></p>
                    <p class="github"><a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</p>
                </div>
            </div>`;
        } else {
            resultCards = resultCards + `        <div class="card">
                <p class="name">${employee.name}</p>
                <p class="role">${employee.constructor.name}</p>
                <div class="container">
                    <p class="id">ID: ${employee.id}</p>
                    <p class="email">Email: <a href="${employee.email}">${employee.email}</a></p>
                    <p class="school">School: ${employee.getSchool()}</p>
                </div>
            </div>`;
        }
    });
    return resultCards;
}

function generateHTML(employeeArr) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Our Team</title>
</head>
<body>
    <h1 id='title'>Our Team</h1>
    <div class='card-holder'>
        ${generateCard(employeeArr)}
    </div>
</body>
</html>`;
}

module.exports = generateHTML;