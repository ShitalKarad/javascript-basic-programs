const prompt = require("prompt-sync")();
let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter second number: ");

var temp = num1;
num1 = num2;
num2 = temp;

console.log("value after swapping num1 "+num1);
console.log("value after swapping num2 "+num2);