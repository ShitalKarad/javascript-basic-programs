const prompt = require("prompt-sync")();

let lowerRange = parseInt(prompt("Enter first number: "));
let higherRange = parseInt(prompt("Enter second number: "));

console.log("Lower and higher range is " + lowerRange +" "+higherRange);
for(let i = lowerRange; i<=higherRange;i++){

    let count = 0;

    for(let j = 2 ; j<i ; j++){

        if(i % j == 0){
            count++;
            break
        }
    }

    if (i > 1 && count == 0) {
        console.log(i);
    }
}