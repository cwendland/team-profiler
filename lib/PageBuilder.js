const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const fs = require('fs');
const inquirer = require('inquirer');

class PageBuilder {


    getManagerInput() {
        inquirer
          .prompt([
            //QUESTIONS
            {
                'type': 'input',
                'name': 'name',
                'question': 'What is the team manager\'s name?'
            },
            {
                'type': 'input',
                'name': 'id',
                'question': 'What is the team manager\'s employee ID?'
            },
            {
                'type': 'input',
                'name': 'email',
                'question': 'What is the team manager\'s email address?'
            },
            {
                'type': 'input',
                'name': 'officenumber',
                'question': 'What is the team manager\'s office number?'
            }
          ])
          .then((answers) => this.addInput(answers))
          .catch((err) => console.log(err));
    }

    getEngineerInput() {
        inquirer
          .prompt([
            //QUESTIONS
            {
                'type': 'input',
                'name': 'name',
                'question': 'What is the engineer\'s name?'
            },
            {
                'type': 'input',
                'name': 'id',
                'question': 'What is the engineer\'s employee ID?'
            },
            {
                'type': 'input',
                'name': 'email',
                'question': 'What is the engineer\'s email address?'
            },
            {
                'type': 'input',
                'name': 'github',
                'question': 'What is the engineer\'s Github username?'
            }
          ])
          .then((answers) => this.addInput(answers, 'Engineer'))
          .catch((err) => console.log(err));
    }

    getInternInput() {
        inquirer
          .prompt([
            //QUESTIONS
            {
                'type': 'input',
                'name': 'name',
                'question': 'What is the intern\'s name?'
            },
            {
                'type': 'input',
                'name': 'id',
                'question': 'What is the intern\'s employee ID?'
            },
            {
                'type': 'input',
                'name': 'email',
                'question': 'What is the intern\'s email address?'
            },
            {
                'type': 'input',
                'name': 'github',
                'question': 'What school does the intern attend?'
            }
          ])
          .then((answers) => this.addInput(answers, 'Intern'))
          .catch((err) => console.log(err));
    }

    addInput(answers, className = 'Default') {
        //ADD INPUT TO OBJECT ARRAY
        switch(className) {
            case 'Engineer':
                this.employeeArr.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                break;
            case 'Intern':
                this.employeeArr.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                break;
            default:
                this.employeeArr.push(new Manager(answers.name, answers.id, answers.email, answers.officenumber));
        }

        inquirer
          .prompt([
            //QUESTIONS
            {
                'type': 'confirm',
                'name': 'another',
                'message': 'Would you like to add another employee?'
            }
          ])
          .then((answers) => {
            if (answers.another) {
                inquirer
                    .prompt([
                    //QUESTIONS
                    {
                        'type': 'choice',
                        'name': 'type',
                        'message': 'Would you like to add an Intern or Engineer to the team?',
                        'choices': ['Engineer', 'Intern']
                    }
                    ])
                    .then((answers) => {
                        if(answers.type === 'Engineer') {
                            this.getEngineerInput();
                        } else {
                            this.getInternInput();
                        }
                    })
            } else {
                this.buildPage();
            }
          })
          .catch((err) => console.log(err));
    }

    buildPage() {
        fs.writeFile("index.html", generateHTML(this.employeeArr));
    }
}