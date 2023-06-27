
const prompt = require("prompt-sync")();
function sum(num){
    if(num > 0){
        return num + sum(num-1);
    }
    else{
        return num;
    }
}

const number = parseInt(prompt('Enter a positive integer: '));
var result = sum(number);
console.log("sum of natural numbers "+result);