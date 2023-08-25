/*
Write a function that takes a number of degrees (degrees) and returns the number of full turns you can make 
with the provided degrees as a whole number.

1 full turn === 360 degrees.
The result should be an integer, i.e. rounded to 0 decimal places.
*/

function calculateFullTurns(degrees) {
    let result = degrees / 360
    return parseInt(result) 
}

let test1 =  calculateFullTurns(10) //returns 0; 
let test2 =  calculateFullTurns(360) //returns 1;
let test3 =  calculateFullTurns(720) //returns 2;
let test4 =  calculateFullTurns(400) //returns 1;
let test5 =  calculateFullTurns(728) //returns 2;
let test6 =  calculateFullTurns(3600) //returns 10;


console.log(`Your result is [${test1}] and should be equal to [0].`)
console.log(`Your result is [${test2}] and should be equal to [1].`)
console.log(`Your result is [${test3}] and should be equal to [2].`)
console.log(`Your result is [${test4}] and should be equal to [1].`)
console.log(`Your result is [${test5}] and should be equal to [2].`)
console.log(`Your result is [${test6}] and should be equal to [10].`)

// to run use node calculateFullTurns.js