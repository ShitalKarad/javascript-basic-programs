const sentence = 'I am learning JavaScript';
const word = sentence.split(' ');
 word.sort();

for (const element of word) {
    console.log(element);
  }