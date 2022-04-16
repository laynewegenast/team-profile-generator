const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { throwError } = require('rxjs');
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
   
    
    let HTML = generateHTML(employyesList)
    let completeHTML = `
    <!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Profiles</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand bg-primary w-100 text-center">My Team</span>
        </nav>
    </header>
    <main>
    <div class=row>
    ${HTML}
    </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <script src="" async defer></script>
</body>

</html>
    `

    fs.writeFileSync("index.html",completeHTML,function(err){
        if(err) throw err;
    })
    console.log(completeHTML)

}



getTeamManager();
