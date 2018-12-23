'use strict'

let dev = require('./modules/construct');

let inquirer = require('inquirer');

console.log("\nSo your a dev, huh?\n");

console.log("-----------");

let questions = [
    {
        type:"input",
        name:"Q1",
        message:"What is your name?"
    },
    {
        type:"input",
        name:"Q2",
        message:"What is your current role?"
    },
    {
        type:"input",
        name:"Q3",
        message:"How old are you?"
    },
    {
        type:"input",
        name:"Q4",
        message:"What is your favorite language?"
    }
];

inquirer.prompt(questions).then(function(answers){
    let bob = new dev(answers.Q1, answers.Q2, answers.Q3, answers.Q4);

    let space = function(){
        console.log("\n");
    }
    space();

    console.log(bob.print());
});