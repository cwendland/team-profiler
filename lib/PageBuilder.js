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
                'type': 'choice',
                'name': 'class',
                'question': 'What '
            },
          ])
          .then((answers) => this.addInput(answers))
          .catch((err) => console.log(err));
    }

    getEngineerInput() {
        inquirer
          .prompt([
            //QUESTIONS
            {
                'type': 'choice',
                'name': 'class',
                'question': 'What '
            },
          ])
          .then((answers) => this.addInput(answers, 'Engineer'))
          .catch((err) => console.log(err));
    }

    getInternInput() {
        inquirer
          .prompt([
            //QUESTIONS
            {
                'type': 'choice',
                'name': 'class',
                'question': 'What '
            },
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
                'type': 'choice',
                'name': 'class',
                'question': 'What '
            },
          ])
          .then((answers) => {
            if (answers.another === 'Yes') {
                inquirer
                    .prompt([
                    //QUESTIONS
                    {
                        'type': 'choice',
                        'name': 'class',
                        'question': 'What '
                    },
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
        
    }
}