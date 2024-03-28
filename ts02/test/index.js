"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answers = await inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name ?'
    },
    {
        type: 'input',
        name: 'age',
        message: 'Enter your age'
    },
    // {
    //     type: 'list',
    //     name:'gender',
    //     message: 'what is your gender'
    // }
]);
console.log(answers.name, 'is a', answers.age, 'years old', answers.gender);
