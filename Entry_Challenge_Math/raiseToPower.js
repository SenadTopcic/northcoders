/*
Write a function that takes two numbers (m and n) and returns the result of raising m to the power of n.mber.

NB: i use the Math.pow() method to solve this problem, and give minigful names to the variables.
you ca use for loop to solve this problem, but i think this is the best way to solve it.

here is for loop solution:
function raiseToPower(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number
    }   
return result
}
*/

function raiseToPower(number, power) {
    let result = Math.pow(number, power)
    return result
}

let test1 =  raiseToPower(2, 1) //returns 2
let test2 =  raiseToPower(2, 2) //returns 4
let test3 =  raiseToPower(2, 3) //returns 8

console.log(`Your result is [${test1}] and should be equal to [2].`)
console.log(`Your result is [${test2}] and should be equal to [4].`)
console.log(`Your result is [${test3}] and should be equal to [8].`)


// to run use node raiseToPower.js