/*

Write a function that takes two inputs (value1 and value2) and returns true if those two 
values are strictly equal and false if they are not.

*/

function areValuesEqual(value1, value2) {
    if (value1 === value2) {
        return true;
    } else {
        return false;
    }
}
 
 let test1 =  areValuesEqual(1, 1) // returns true
 let test2 =  areValuesEqual('hello', 'hello') // returns true
 let test3 =  areValuesEqual(1, '1') // returns false
 let test4 =  areValuesEqual(0, false) // returns false
 let test5 =  areValuesEqual(1, true) // returns false
 let test6 =  areValuesEqual(0, null) // returns false
let test7 =  areValuesEqual(null, null) // returns true
let test8 =  areValuesEqual(undefined, undefined) // returns true
let test9 =  areValuesEqual(0, undefined) // returns false
let test10 =  areValuesEqual('hello', undefined) // returns false
let test11 =  areValuesEqual('hello', null) // returns false
let test12 =  areValuesEqual('hello', 0) // returns false
let test13 =  areValuesEqual([],[]) // returns false

 
 
 console.log(`Your result is [${test1}]  and should be equal to [true].`)
console.log(`Your result is [${test2}]  and should be equal to [true].`)
console.log(`Your result is [${test3}]  and should be equal to [false].`)
console.log(`Your result is [${test4}]  and should be equal to [false].`)
console.log(`Your result is [${test5}]  and should be equal to [false].`)
console.log(`Your result is [${test6}]  and should be equal to [false].`)
console.log(`Your result is [${test7}]  and should be equal to [true].`)
console.log(`Your result is [${test8}]  and should be equal to [true].`)
console.log(`Your result is [${test9}]  and should be equal to [false].`)
console.log(`Your result is [${test10}]  and should be equal to [false].`)
console.log(`Your result is [${test11}]  and should be equal to [false].`)
console.log(`Your result is [${test12}]  and should be equal to [false].`)
console.log(`Your result is [${test13}]  and should be equal to [false].`)

 
 // to run use node areValuesEqual.js