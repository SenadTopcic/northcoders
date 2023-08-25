/*
Write a function that takes a number (n) and returns the square root of that number.
*/

function squareRoot(n) {
    let result = Math.sqrt(n)
    return result
}

let test1 =  squareRoot(4) //returns 2
let test2 =  squareRoot(36) //returns 6

console.log(`Your result is [${test1}] and should be equal to [2].`)
console.log(`Your result is [${test2}] and should be equal to [6].`)


// to run use node squareRoot.js