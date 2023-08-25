/*
Write a function that takes a string and returns the length of that string as a number.
i can use .length but i want to use a function
*/

function getLength(string) {
   let increment = 0;
   while (string[increment] !== undefined) {
      increment++;
   }
   return increment;
}
 
let test1 =  getLength("a") // returns 1
let test2 =  getLength("and") // returns 3
let test3 =  getLength("welcome to northcoders") // returns 22
let test4 =  getLength("") // returns 0 



console.log(`Your result is [${test1}]  and should be equal to [1].`)
console.log(`Your result is [${test2}]  and should be equal to [3].`)
console.log(`Your result is [${test3}]  and should be equal to [22].`)
console.log(`Your result is [${test4}]  and should be equal to [0].`)



 // to run use node getLength.js