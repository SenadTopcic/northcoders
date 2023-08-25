/*
Write a function that takes two numbers (a and b) and returns the remainder of a divided by b.
*/

function modulo(a, b) {
    let result = a % b
    return result
}

let test1 =  modulo(4, 2) //returns 0
let test2 =  modulo(456, 25) //returns 6

console.log(`Your result is [${test1}] and should be equal to [0].`)
console.log(`Your result is [${test2}] and should be equal to [6].`)

// to run use node modulo.js