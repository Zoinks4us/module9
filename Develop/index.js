// TODO: Include packages needed for this application
const fs = require('fs')
const script = require('./utils/generateMarkdown')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([

    {
       type: 'input',
       name: 'description',
       message: 'Provide a short description explaining the what, why, and how of your project.',   
       validate: value => {
         if (value) {
         return true;
         } else {
             console.log('Please breifly describe your project');
             return false;
         }
     }
       
     },
     {
       type: 'input',
       name: 'title',
       message: 'what is the title of this project?',
       validate: value => {
         if (value) {
         return true;
         } else {
             console.log('Please input your project title');
             return false;
         }
     }
     },
     {
       type: 'input',
       name: 'installation',
       message: 'What are the steps required to install your project?',
       validate: value => {
         if (value) {
         return true;
         } else {
             console.log('Please include installation steps');
             return false;
         }
     }
     },
     {
       type: 'input',
       name: 'instructions',
       message: 'Provide instructions and examples for use',
       validate: value => {
         if (value) {
         return true;
         } else {
             console.log('Please provide instructions for use');
             return false;
         }
     }
     },
     {
       type: 'input',
       name: 'partners',
       message: 'List your collaborators, if any, with links to their GitHub profiles.',
     
     },
     {
       type: 'input',
       name: 'liscense',
       message: 'What liscense did you use? if w/o one, levae blank'
     },
   ])
   
}

//questions().then 


// TODO: Create a function to write README file
function writeToFile(readme) {
  fs.writeFile('New-README.md', )
}

// TODO: Create a function to initialize app
function init() {
  questions()
  .then(function(answer){
    var readme = script(answer);
    writeToFile(readme)
  }

  );
}

// Function call to initialize app
init();

module.exports = questions;
