/*
Write a function that takes a string as its argument (string) and returns true if the string is of an even length.
Otherwise, the function should return false.
*/

function isEvenLength(string) {
   let strLength = (string.toString()).length;
   return  (strLength % 2 == 0) ? true : false;  
}
 
let test1 =  isEvenLength(12) // returns true
let test2 =  isEvenLength('everyone') // returns true
let test3 =  isEvenLength('') // returns true
let test4 =  isEvenLength('odd') // returns false
let test5 =  isEvenLength('false') // returns false


console.log(`Your result is [${test1}]  and should be equal to [true].`)
console.log(`Your result is [${test2}]  and should be equal to [true].`)
console.log(`Your result is [${test3}]  and should be equal to [true].`)
console.log(`Your result is [${test4}]  and should be equal to [false].`)
console.log(`Your result is [${test5}]  and should be equal to [false].`)


 // to run use node isEvenLength.js