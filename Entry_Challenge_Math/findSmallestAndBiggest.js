/*

Write a function that takes an array (arr) and returns a new array containing the 
smallest and biggest values of the original array.
there is tree ways to solve this problem, i use the Math.min() and Math.max() methods to solve this problem,
for loop and sort method can be used to solve this problem.

*/

function findSmallestAndBiggest(arr) {
   let resultArray = []
    let smallest = Math.min(...arr) // i use the spread operator to solve this problem
    let biggest = Math.max(...arr) // i use the spread operator to solve this problem
    resultArray.push(smallest, biggest)
    return resultArray
}

let test1 =  findSmallestAndBiggest([1, 2, 3, 4, 5]) //returns [1, 5];
console.log(typeof test1) // object confirm that the result is an object
console.log(Array.isArray(test1))   // true confirm that the result is an array
console.log(`Your result is [${test1}]  and should be equal to [1, 5].`)

// to run use node findSmallestAndBiggest.js