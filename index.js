const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: `What's the title of your project?`,
    },
    {
      type: 'input',
      name: 'description',
      message: `What's a description for this project?`,
    },
    {
      type: 'input',
      name: 'installation',
      message: `How do you install the app?`,
    },

    {
      type: 'input',
      name: 'usage',
      message: `How do you use your app?`,
    },

    {
      type: 'input',
      name: 'guidelines',
      message: `What are the contribution guidelines?`,
    },

    {
      type: 'input',
      name: 'license',
      message: `what license is your app covered under?`,
    },

    {
      type: 'input',
      name: 'test',
      message: `How did you test your app?`,
    },

    {
      type: 'input',
      name: 'questions',
      message: `How can I reach you?`,
    },
    
  ])
  .then((response) => {
    console.log(response);
   
    const readMeString = `# ${response.projectTitle}

  ## Description
    
  ${response.description}

  ## Table of contents
  
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing Guidelines](#ContributingGuidlines)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ${response.license}

  ## Contributing Guidelines
  ${response.guidelines}

  ## Tests
  ${response.test}

  ## Questions
  ${response.questions}
  
  `

    fs.writeFile('README.md', readMeString, 'utf8', (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
