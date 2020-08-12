const inquirer = require('inquirer')
const fs = require('fs')
// array of questions for user
// const questions = [

// ];

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project Title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your Project about?'
    },
    {
        type: 'input',
        name: "installation",
        message: 'how do you install your program, if installation is needed?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what can your project be used for?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'choose the correct license',
        choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
        ]
    },
    {
        type: 'input',
        name: "contributors",
        message: "who else contributed to this project?"
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Was this project tested? How many times?'
    },
    {
        type: 'input',
        name: "questions",
        message: 'who is contacted if this project creators/or users have questions?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email'
    }
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github Username'
    },

])

// function to write README file
// function writeToFile(fileName, data) {
// }
.then (({title, description, installation, usage, license, contributors, tests, questions, email,username}) =>
{ fs.writeFile('README.md', `

`)

}
)

// function to initialize program
function init() {

}

// function call to initialize program
init();
