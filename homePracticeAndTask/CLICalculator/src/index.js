"use strict";
// // // var a
// // console.log(a)
// // let a = 12
// // console.log(a)
Object.defineProperty(exports, "__esModule", { value: true });
// let numbers = [0, 1, 2, 3, 4, 5];
// // numbers.push(7)  // insert 7 to numbers
// // numbers.pop()   // remove last index value
// // numbers.shift(10) // remove value from last
// // numbers.unshift(10)   // add value to index 0
// // numbers.splice(3, 12); // start removing from index 3 and remove 12 values after index 3 it will also remove index 3
// numbers.splice(1);
// // numbers.splice(-1,2)
// // numbers.splice(-1,3)
// console.log(numbers);
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { message: "Enter first number", type: "number", name: "num1" },
    { message: "Enter second number", type: "number", name: "num2" },
    {
        message: "Select your desired operator",
        type: "list",
        name: "operator", // Corrected the name here
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log("The ".concat(answer.operator, " of ").concat(answer.num1, " and ").concat(answer.num2, " is : ").concat(answer.num1 + answer.num2));
}
else if (answer.operator === "subtraction") {
    console.log("The ".concat(answer.operator, " of ").concat(answer.num1, " and ").concat(answer.num2, " is : ").concat(answer.num1 - answer.num2));
}
else if (answer.operator === "multiplication") {
    console.log("The ".concat(answer.operator, " of ").concat(answer.num1, " and ").concat(answer.num2, " is : ").concat(answer.num1 * answer.num2));
}
else if (answer.operator === "division") {
    console.log("The ".concat(answer.operator, " of ").concat(answer.num1, " and ").concat(answer.num2, " is : ").concat(answer.num1 / answer.num2));
}
