const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let employyesList = []

const getTeamManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "empname",
            message: "Enter Manager name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter Manager ID number: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter Manager email: "
        },
        {
            type: "input",
            name: "officenum",
            message: "Enter Manager office number: "
        }
    ]).then(response => {
        const newHireManager = new Manager(response.empname, response.id, response.email, response.officenum);
        employyesList.push(newHireManager)
        createTeam()
    })
}

const createTeam = () => {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Add new Engineer", "Add new Intern", "Exit the application"],
            message: "Enter name:",
            name: "teamopts"
        }
    ])
        .then(response => {
            switch (response.teamopts) {
                case "Add new Engineer":
                    getEngineer()
                    break
                case "Add new Intern":
                    getIntern()
                    break
                case "Exit the application":
                    exitApp()
                    break
            }
        })
}
const getEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "empname",
            message: "Enter Engineer name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter Engineer ID number: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter Engineer email: "
        },
        {
            type: "input",
            name: "enggithub",
            message: "Enter Engineer GitHub username: "
        }
    ]).then(response => {
        const newHireEngineer = new Engineer(response.empname, response.id, response.email, response.enggithub);
        employyesList.push(newHireEngineer)
        console.log(employyesList)
        createTeam()
    })
}

const getIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "empname",
            message: "Enter Intern name: "
        },
        {
            type: "input",
            name: "id",
            message: "Enter Intern ID number: "
        },
        {
            type: "input",
            name: "email",
            message: "Enter Intern email: "
        },
        {
            type: "input",
            name: "schoolname",
            message: "Enter Intern school name: "
        }
    ]).then(response => {
        const newHireIntern = new Intern(response.empname, response.id, response.email, response.schoolname);
        employyesList.push(newHireIntern)
        createTeam()
    })
}

const exitApp = () => {
    console.log(employyesList)
}



getTeamManager();
