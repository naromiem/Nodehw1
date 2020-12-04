// array of questions for user
const inquirer = require("inquirer");
const fs = require('fs'); [
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
          },
        {
            type: "list",
            message: "What do you want to order?",
            name: "dessert",
            choices: ["Ice cream", "FroYo", "cake"]
          },
    
      {
        type: "list",
        message: "Choose a flavor",
        name: "iceCream",
        choices: ["cookies and cream", "vanilla", "chocolate", "strawberry", "rhum raison", "pistachio"]
      },
      {
        type: "list",
        message: "Choose a topping",
        name: "toppings",
        choices: ["sprinkles", "caramel", "white chocolate chips", "mango",  "strawberries"]
      },
      {
        type: "list",
        message: "Choose a size",
        name: "cake",
        choices: ["small", "medium", "large", "extra large"]
      },
      
    ])

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
