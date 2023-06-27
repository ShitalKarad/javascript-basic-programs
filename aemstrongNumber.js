// program to check an Armstrong number of three digits
const prompt = require("prompt-sync")();
let num = prompt("Enter number ");
let sum = 0;
let temp = num;

while( temp > 0){

    remainder = temp % 10 ;
    sum += remainder * remainder * remainder;
    // another way sum += remainder ** 3;
    
    temp = parseInt(temp / 10); // removing last digit
}
if(sum == num ){
    console.log(num + " is a armstrong number");
}else{
    console.log(num + " is not a armstrnog number");
}