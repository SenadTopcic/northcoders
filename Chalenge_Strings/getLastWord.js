/*
Write a function that takes a string and returns the last word.
*/

function getLastWord(str) {
   if (str.length === 0) {
      return "";
   }
   if (str.length === 1) {
      return str;
   }
   let counter = str.length - 1;
   let result = "";
   while (str[counter] !== " " && counter >= 0) {
      counter--;
   }
   result = str.slice(counter + 1);   
   return result;
}
 
let test1 =  getLastWord("biscuits") // returns 'biscuits'
let test2 =  getLastWord("custard cream") // returns 'cream'
let test3 =  getLastWord("biscuits are great with tea") // returns "tea
let test4 =  getLastWord("I like music") // returns 'music'

console.log(`Your result is [${test1}]  and should be equal to [biscuits].`)
console.log(`Your result is [${test2}]  and should be equal to [cream].`)
console.log(`Your result is [${test3}]  and should be equal to [tea].`)
console.log(`Your result is [${test4}]  and should be equal to [music].`)


 // to run use node getLastWord.js