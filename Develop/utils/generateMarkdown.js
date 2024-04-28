// TODO: Create a function that returns a license badge based on which license is passed in

const fs = require('fs');
const index = require('../index.js');
const inquirer = require('inquirer');
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = '';
    if(license === 'Apache 2.0') {
        badge = '![GitHub license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    } else if (license === 'MIT') {
        badge = '![License](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)'
    } else if (license === 'GPL v3.0') {
        badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    } else {
      badge = ""
    }
    return badge;
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink = '';
      if(license === 'MIT') {
        licenseLink = 'https://choosealicense.com/licenses/mit/'
      } else if (license === 'Apache 2.0') {
        licenseLink = 'http://www.apache.org/licenses/LICENSE-2.0'
      } else if (license === 'GPL v3.0') {
        licenseLink = 'https://www.gnu.org/licenses'
      } else {
        licenseLink = ""
      }
      return licenseLink;
  }

// TODO: Create a function that returns the license section of README

// If there is no license, return an empty string
//function renderLicenseSection(license) {answer}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
    return `# ${answer.title}

            ## Description:  
            ### ${answer.description}


            ## Table of Contents:
            ### * [Description](#description)
            ### * [Installation](#installation)
            ### * [Usage](#usage)
            ### * [License](#license)
            ### * [Contributors](#contributors)
          

            
            
            ## Installation:
            ### ${answer.installation}

            ## Usage:
            ### ${answer.instructions}

            ## Contributors:
            ### ${answer.partners}

            ### ${renderLicenseLink(answer.license)}  ${renderLicenseBadge(answer.license)}

           


`;
}

module.exports = generateMarkdown;
