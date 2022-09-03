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
    // {
    //   type: "input",
    //   name: "description",
    //   message: "Describe your application",
    // },
    // {
    //   type: "input",
    //   name: "installation",
    //   message: "Describe your application's installation process",
    // },
    // {
    //   type: "input",
    //   name: "usage",
    //   message: "Outline its usage information.",
    // },
    // {
    //   type: "input",
    //   name: "contribution",
    //   message: "Outline the contribution guidelines.",
    // },
    // {
    //   type: "input",
    //   name: "testing",
    //   message: "Detail testing information.",
    // },
    // {
    //   type: "input",
    //   name: "github",
    //   message: "What is your gitHub username?",
    // },
    // {
    //   type: "input",
    //   name: "email",
    //   message: "What is your email address?",
    // },
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
  let badge;
  if (license === "Apache") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    badge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "BSD") {
    badge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "GNU LGPL v3") {
    badge =
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else badge = "";
  return `# ${title} ${badge}

  ---

  ## Description

  ${description}

  ## Table of contents

  1. [Installation Instructions](#installation)

  2. [Usage Information](#usage)

  3. [Contributions Guidelines](#contributions)

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

  This application is covered under ${license}.

  ## <a id= "questions"> Questions </a>

  For any additional questions, you can contact me:

  [${email}](https://${email})

  You can find my GitHub at:

  [${github}](https://${github})`;
};
// const licensing = () => {};
// licensing();
