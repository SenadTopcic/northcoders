/*

Write a function that takes two inputs (value1 and value2) and returns true if those two values 
are not strictly equal and false if they are.

*/

function areValuesNotEqual(value1, value2) {
   return  (value1 === value2) ? false : true;  
}
 
let test1 =  areValuesNotEqual(1, '1') // returns true
let test2 =  areValuesNotEqual('hello', 'goodbye') // returns true
let test5 = areValuesNotEqual([], []) // returns true
let test3 =  areValuesNotEqual(1, 1) // returns false
let test4 =  areValuesNotEqual(true, true) // returns false
 
console.log(`Your result is [${test1}]  and should be equal to [true].`)
console.log(`Your result is [${test2}]  and should be equal to [true].`)
console.log(`Your result is [${test5}]  and should be equal to [true].`)
console.log(`Your result is [${test3}]  and should be equal to [false].`)
console.log(`Your result is [${test4}]  and should be equal to [false].`)
 
 // to run use node areValuesNotEqual.js