/*
Write a function that takes a string and returns the string in camel case. 
This means all spaces should be removed, and every word other than the first should be capitalised.

*/

function convertToCamelCase(sentence) {
   if (sentence.length === 0) {
      return "";
   }
   let wordArray = sentence.split(" ");
   let result = [];
   for (let i = 0; i < wordArray.length; i++) {
      let word = wordArray[i];
      let modifiedWord = "";
      for (let j = 0; j < word.length; j++) {
         if (i === 0 && j === 0) {
            modifiedWord += word[j].toLowerCase();
         }
         else if (j === 0) {
            let char = word[j].toUpperCase();
            modifiedWord += char;
         } else {
            modifiedWord += word[j].toLowerCase();
         }
      }
      result.push(modifiedWord);
   }
   let resultString = result.join("");
   return resultString;
}


let test1 =  convertToCamelCase("hello") // returns 'hello'
let test2 =  convertToCamelCase("hello northcoders") // returns 'helloNorthcoders'
let test3 =  convertToCamelCase("I love JavaScript") // returns 'iLoveJavascript

console.log(`Your result is [${test1}]  and should be equal to [hello].`)
console.log(`Your result is [${test2}]  and should be equal to [helloNorthcoders].`)
console.log(`Your result is [${test3}]  and should be equal to [iLoveJavascript].`)

 // to run use node hyphenateWords.js