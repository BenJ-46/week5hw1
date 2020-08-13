const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
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
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github Username'
    },

 ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName + '.md', data, function (err) {
        if (err) {
            console.log(err)
        }
    })
  }
 // function to initialize program
 async function init() {
    const response = await inquirer.prompt(questions);
    writeToFile("README.md", generateMarkdown(response));
 }

// function call to initialize program
init();
