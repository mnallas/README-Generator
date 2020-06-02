var inquirer = require("inquirer");
const questions = [];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your username? ",
      name: "userInput1",
    },
    {
      type: "input",
      message: "What is your email? ",
      name: "userInput2",
    },
    {
      type: "input",
      message: "What is the URL to your project? ",
      name: "userInput3",
    },
    {
      type: "input",
      message: "Please write a short description of your project. ",
      name: "userInput4",
    },
    {
      type: "list",
      name: "userInput5",
      message: "What type of license? ",
      choices: [
        "MIT",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "Boost Software License 1.0",
        "Unlicense",
      ],
    },
    {
      type: "input",
      message: "What type of command should be run to install dependencies? ",
      name: "userInput6",
    },
    {
      type: "input",
      message: "What command should be run to run tests? ",
      name: "userInput7",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo? ",
      name: "userInput8",
    },
    {
      type: "input",
      message:
        "What does the user need to know about contributing to the repo? ",
      name: "userInput9",
    },
  ])
  .then(function (response) {
    var data =
      response.userInput1 +
      "\n## Description\n" +
      response.userInput4 +
      `\n## Table of Contents\n
        * Installation\n
        * Usage\n
        * License\n
        * Contributing\n
        * Tests\n
        * Questions\n` +
      "## Installation\n" +
      "To install necessary dependecies, run the following command:\n" +
      response.userInput6 +
      "\n## Usage\n" +
      response.userInput8 +
      "\n## License\n" +
      response.userInput5 +
      "\n## Contributing\n" +
      response.userInput9 +
      "\n## Tests\n" +
      "To run tests, run the following command:\n" +
      response.userInput7 +
      "\n## Questions\n" +
      response.userInput3 +
      "\n" +
      response.userInput2 +
      "\n";

    var fs = require("fs");

    fs.writeFile("README.md", data, function (error) {
      if (error) {
        return console.log(error);
      }
    });
  });

function init() {}

init();
