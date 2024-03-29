import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "num1" },
  { message: "Enter second number", type: "number", name: "num2" },
  {
    message: "Select your desire operator",
    type: "list",
    name: "num1",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

if (answer.operator == "addition") {
  console.log(answer.num1 + answer.num2);
} else if (answer.operator == "subtraction") {
  console.log(answer.num1 - answer.num2);
} else if (answer.operator == "multiplication") {
  console.log(answer.num1 * answer.num2);
} else if (answer.operator == "division") {
  console.log(answer.num1 / answer.num2);
}
