/*
Write a function that takes a string and returns the last word.
i can use the split method to split the string into an array of words
and then join the array with a hyphen

function hyphenateWords(str) {
   if (str.length === 0) {
      return "";
   }
   if (str.length === 1) {
      return str;
   }
   let result = str.split(" ").join("-");
   return result;
}
*/

function hyphenateWords(str) {
   if (str.length === 0) {
      return "";
   }
   if (str.length === 1) {
      return str;
   }
   let counter = 0;
   let result = [];
   while (counter < str.length) {

      if (str[counter] === " ") {
         result[counter] = "-";
      } else {
         result[counter] = str[counter];
      }
      counter++;
   }  
   let resultString = result.join("");
   return resultString;
}

let test1 =  hyphenateWords("hello") // returns 'hello'
let test2 =  hyphenateWords("hello northcoders") // returns 'hello-northcoders'
let test3 =  hyphenateWords("hello northcoders and everyone who is coding") // returns "hello-northcoders-and-everyone-who-is-coding

console.log(`Your result is [${test1}]  and should be equal to [hello].`)
console.log(`Your result is [${test2}]  and should be equal to [hello-northcoders].`)
console.log(`Your result is [${test3}]  and should be equal to [hello-northcoders-and-everyone-who-is-coding].`)

 // to run use node hyphenateWords.js