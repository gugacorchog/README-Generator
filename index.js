const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the project title?',
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: "
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation process if any:',
        default: 'npm install?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is this project usage for?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Who are the contributors of this projects?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Is there a test included?',
      },  
      {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue? "
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
  },
    {
      type: 'list',
      message: 'Chose the appropriate license for this project: ?',
      name: 'license',
      choices: ['Affero General Public License v3.0', 'General Public License v3.0', 'telekinesisLesser General Public License v3.0', 'Mozilla Public License 2.0', 'MIT License'],
    },
]
        
  
function writingToFile(data) {
    fs.appendFile('readme2.md', generateMarkdown(data), function (err) {
        if(err) throw err;
        console.log('Readme created!')

    })
}


  function init() {
      inquirer.prompt(questions)
      .then((answers) => {
        console.log(answers)
        writingToFile(answers)
      })
      
  }

  init()

