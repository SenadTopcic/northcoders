/*
Write a function that takes a string and returns the middle character for an odd-length string,
 or the two middle characters for an even-length string.
*/

function getMiddle(str) {
   if (str.length === 0) {
      return "";
   }
   if (str.length === 1) {
      return str;
   }
   let result = "";
   let middle = Math.floor(str.length / 2);

   if (str.length % 2 === 0) {
      result = str[middle - 1] + str[middle];
   } else {
      result = str[middle];
   }
   return result;
}
 
let test1 =  getMiddle("and") // returns 'n'
let test2 =  getMiddle("cloud") // returns 'o'
let test3 =  getMiddle("chin") // returns 'hi'
let test4 =  getMiddle("castle") // returns 'st'

console.log(`Your result is [${test1}]  and should be equal to [n].`)
console.log(`Your result is [${test2}]  and should be equal to [o].`)
console.log(`Your result is [${test3}]  and should be equal to [hi].`)
console.log(`Your result is [${test4}]  and should be equal to [st].`)

 // to run use node getMiddle.js