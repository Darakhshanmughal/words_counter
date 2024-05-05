#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("Welcome to 'code with darakhshan' word_counter."));
console.log("=".repeat(60));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
let wordCount = words.length;
console.log("=".repeat(60));
console.log(chalk.bold("sentence words"));
console.log(words);
console.log(chalk.bold(`Word count: ${wordCount}`));
console.log("=".repeat(60));
