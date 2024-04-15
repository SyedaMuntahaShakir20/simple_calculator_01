#! /usr/bin/env node
import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        name: "firstName",
        message: "Enter your first number: ",
        type: "number"
    },
    {
        name: "secondName",
        message: "Enter your second number: ",
        type: "number"
    },
    {
        name: "operator",
        message: "Select one of the operator: ",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answers.operator === "Addition") {
    console.log(answers.firstName + answers.secondName);
}
else if (answers.operator === "Subtraction") {
    console.log(answers.firstName - answers.secondName);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.firstName * answers.secondName);
}
else if (answers.operator === "Division") {
    console.log(answers.firstName / answers.secondName);
}
else {
    console.log("Invalid operation");
}
