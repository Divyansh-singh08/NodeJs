// const chalk = require("chalk");
import chalk from "chalk";
// const validator = require('validator');
import validator from 'validator';
// console.log(chalk.blue("Hello world!"));
// console.log(chalk.green.underline("Hello world!"));
// console.log(chalk.blue.italic("Hello world!"));
console.log(chalk.green.underline.inverse("success"));
// console.log(chalk.blue.bold("Hello world!"));

const res = validator.isEmail('divyansh@sigh.com');
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res));