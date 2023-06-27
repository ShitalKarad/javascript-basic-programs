const prompt = require("prompt-sync")();

const operator = prompt('Enter operator ( either +, -, * or / ): ');
let num1 = prompt("Enter first num: ");
let num2 = prompt("Enter second num: ");
let result;
if (operator == '+') {
    result = num1 + num2 ;
}
else if(operator == '-'){
    result = num1 - num2 ;
}
else if(operator == '*'){
    result = num1 * num2;
   }else{
    result = num1 / num2;
}

console.log(result);