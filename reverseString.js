function reverseString(str){
    let newString = ' ';
    for(let i = str.length-1; i>=0; i--){
        newString += str[i];
    }
    return newString;
}

let inputString = 'Shital';

const result = reverseString(inputString);
console.log("reverse string is " + result);