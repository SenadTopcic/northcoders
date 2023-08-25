/*
Write a function that takes a string in capital letters and returns the string with just the first letter being capitalised.
*/

function dontShoutSentence(sentence) {
   if (sentence.length === 0) {
      return "";
   }

   let firstLetter = sentence[0].toUpperCase();

   let restOfSentence = sentence.slice(1).toLowerCase();
   return firstLetter + restOfSentence;
}
 
let test1 =  dontShoutSentence("HELLO") // returns 'Hello'
let test2 =  dontShoutSentence("HELLO NORTHCODERS") // returns 'Hello northcoders'
let test3 =  dontShoutSentence("CODING IS GREAT!!!") // returns "Coding is great!!!"
let test4 =  dontShoutSentence("") // returns ""

console.log(`Your result is [${test1}]  and should be equal to [Hello].`)
console.log(`Your result is [${test2}]  and should be equal to [Hello northcoders].`)
console.log(`Your result is [${test3}]  and should be equal to [Coding is great!!!].`)
console.log(`Your result is [${test4}]  and should be equal to [].`)

 // to run use node dontShoutSentence.js