const text = 'Mr Red has a red house and a red car';
const newText = text.replace('red','pink');
console.log(newText);

//another solution

// program to replace all occurrence of a string

const string = 'Mr red has a red house and a red car';

const result = string.split('red').join('blue');

console.log(result);