function fibonacci(num){
    if (num < 2) {
        return num;  
    }
    else{
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

const nTerm = 5;
if (nTerm <= 0) {
    console.log("Enter a positive integer");
}
else{
    for(let i = 0; i < nTerm; i++){
        console.log(fibonacci(i));
    }
}