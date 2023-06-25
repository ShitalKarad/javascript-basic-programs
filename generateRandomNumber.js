const Prompt = require("prompt-sync")();
const min = Prompt("Enter a max number: ");
const max = Prompt("Enter a min number: ");

const a = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Random number between "+min +" & "+max +" is " +a)