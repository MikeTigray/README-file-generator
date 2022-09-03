const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your application?",
    },
    {
      type: "list",
      name: "license",
      message: "What license is your application using?",
      choices: ["Apache", "Boost", "BSD", "GNU LGPL v3", "None of the above"],
    },
    {
      type: "input",
      name: "description",
      message: "Describe your application",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe your application's installation process",
    },
    {
      type: "input",
      name: "usage",
      message: "Outline its usage information.",
    },
    {
      type: "input",
      name: "contribution",
      message: "Outline the contribution guidelines.",
    },
    {
      type: "input",
      name: "testing",
      message: "Detail testing information.",
    },
    {
      type: "input",
      name: "github",
      message: "What is your gitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((answers) => {
    fs.writeFile("generatedREADME.md", generateReadme(answers), (err) =>
      err ? console.log(err) : console.log("written successfully!")
    );
  });

const generateReadme = ({
  title,
  license,
  description,
  installation,
  usage,
  contribution,
  testing,
  github,
  email,
}) => {
  return `# ${title}

  ---
  
  ## Description
  
  ${description}
  
  ## Table of contents
  
  1. [Installation Instructions](#installation)
  
  2. [Usage Information](#usage)
  
  3. [Contributions Guidelines](#contribution)
  
  4. [Testing](#testing)
  
  5. [License Information](#license)
  
  ---
  
  ## <a id="installation">Installation </a>
  
  ${installation}
  
  ## <a id="usage"> Usage </a>
  
  ${usage}
  
  ## <a id="contributions"> Contributions </a>
  
  ${contribution}
  
  ## <a id="testing">Testing</a>
  
  ${testing}
  
  ## <a id="license">License information</a>
  
  ${license}
  
  ## <a id= "questions"> Questions </a>
  
  For any additional questions, you can contact me:
  
  [${email}](https://${email})
  
  You can find my GitHub at:
  
  [${github}](https://${github})`;
};
// const licensing = ({ license }) => {
//   if (license === "Apache") {
//     console.log("Apache works!");
//   } else if (license === "Boost") {
//     console.log("Boost works!");
//   } else if (license === "BSD") {
//     console.log("BSD works!");
//   } else if (license === "Boost") {
//     console.log("GNU LGPL v3 works!");
//   } else return;
// };
