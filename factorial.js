function findFctorial(num){
    if(num == 0){
        return 1;
    }
    else{
        return num * findFctorial(num - 1);
    }
}

let num = 5;

if(num > 0){
let result = findFctorial(num);
console.log("factorial of " + num +" is " +result);
}

else{
    console.log("Enter a positive ");
}
