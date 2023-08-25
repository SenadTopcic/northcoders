/*

Write a function that takes a single argument (year) and returns true if the year is between 1960 and 1969 inclusive. 
Otherwise, the function should return false.

*/

function isFromThe60s(year) {
   return  (year >= 1960 && year <= 1969) ? true : false;  
}
 
let test1 =  isFromThe60s(1960) // returns true
let test2 =  isFromThe60s(1965) // returns true
let test3 =  isFromThe60s(1969) // returns true
let test4 =  isFromThe60s(1970) // returns false
let test5 =  isFromThe60s(1865) // returns false


console.log(`Your result is [${test1}]  and should be equal to [true].`)
console.log(`Your result is [${test2}]  and should be equal to [true].`)
console.log(`Your result is [${test3}]  and should be equal to [true].`)
console.log(`Your result is [${test4}]  and should be equal to [false].`)
console.log(`Your result is [${test5}]  and should be equal to [false].`)


 // to run use node isFromThe60s.js