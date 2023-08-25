/*
Write a function that takes two strings as its arguments (string1, string2) 
and returns true if both of the strings are identical when ignoring case.
 Otherwise, the function should return false.
*/

function areStringsEqualCaseInsensitive(string1, string2) {
   let str1 = string1.toString().toLowerCase();
   let str2 = string2.toString().toLowerCase();
   return  (str1 === str2) ? true : false;  
}
 
let test1 =  areStringsEqualCaseInsensitive('hello', 'hello') // returns true
let test2 =  areStringsEqualCaseInsensitive('hello', 'HELLO') // returns true
let test3 =  areStringsEqualCaseInsensitive('banANA', 'BANana') // returns true
let test4 =  areStringsEqualCaseInsensitive('hello', 'hella') // returns false
let test5 =  areStringsEqualCaseInsensitive('apple', 'BANANA') // returns false


console.log(`Your result is [${test1}]  and should be equal to [true].`)
console.log(`Your result is [${test2}]  and should be equal to [true].`)
console.log(`Your result is [${test3}]  and should be equal to [true].`)
console.log(`Your result is [${test4}]  and should be equal to [false].`)
console.log(`Your result is [${test5}]  and should be equal to [false].`)


 // to run use node areStringsEqualCaseInsensitive.js