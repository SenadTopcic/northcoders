/*
Write a function that takes the radius of a circle (a number, r) and returns the area of a circle with that radius. 
Round the result to 3 decimal places.
I can use parseFloat(result.toFixed(3)) round to 3 decimal places instead of Math.round(result * 1000 ) / 1000
*/

function calculateCircleArea(radius) {
    // Your code goes here...
    let result = radius * radius * Math.PI
    return Math.round(result * 1000 ) / 1000  // round to 3 decimal places 
}

let test1 =  calculateCircleArea(1) //returns 3.142; 

console.log(`Your result is [${test1}] and should be equal to [3.142].`)

// to run use node calculateCircleArea.js