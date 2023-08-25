/*
Write a function that takes a string and returns the string with the first letter capitalised.
*/

function capitaliseString(string) {
   if (string.length === 0) {
      return "";
   }
   let firstLetter = string[0].toUpperCase();
   let restOfWord = string.slice(1);
   return firstLetter + restOfWord;
}
 
let test1 =  capitaliseString("a") // returns 'A'
let test2 =  capitaliseString("word") // returns 'Word'
let test3 =  capitaliseString("i love coding") // returns "I love coding"
let test4 =  capitaliseString("") // returns ""

console.log(`Your result is [${test1}]  and should be equal to [A].`)
console.log(`Your result is [${test2}]  and should be equal to [Word].`)
console.log(`Your result is [${test3}]  and should be equal to [I love coding].`)
console.log(`Your result is [${test4}]  and should be equal to [].`)

 // to run use node capitaliseString.js