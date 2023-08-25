/*

Note: The Northcoders staff only have whole pound coins, so the cost per person needs to be rounded up 
to the nearest pound coin (we'll give any extra as a tip!).

Write a function that takes the total cost of the order (totalCost) 
and the number of people the order is for (numOfPeople). It should return the cost per person.

*/

function splitTheBeans(totalCost, numOfPeople) {
   let result = Math.ceil(totalCost / numOfPeople); // round up to the nearest pound coin ceil() rounds up 2.1 to 3
    return result;
}

let test1 =  splitTheBeans(10, 2) //returns 5;
let test2 =  splitTheBeans(10, 3) //returns 4;
let test3 =  splitTheBeans(10, 4) //returns 3;


console.log(`Your result is [${test1}]  and should be equal to [5].`)
console.log(`Your result is [${test2}]  and should be equal to [4].`)
console.log(`Your result is [${test3}]  and should be equal to [3].`)


// to run use node splitTheBeans.js