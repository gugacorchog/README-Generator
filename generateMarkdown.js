// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `license information: ${license}`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `
    `
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `
    `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# < Project Name >
  ${answers.projectTitle}

  ## Description
  ${answers.description}
  
  ## Table of Contents 
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Teste](#test)
  - [License](#license)

  ## Questions 
  ${answers.questions}

  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contribution
  ${answers.contribution}

  ## Questions
  ${answers.questions}

  ## Username 
  ${answers.username}

  ## License 
  ${answers.license}  
 
  
  ## Tests
  ${answers.tests}
  `
}

module.exports = generateMarkdown;
