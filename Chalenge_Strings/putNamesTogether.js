/*
Write a function that takes two arguments (firstName and secondName) and 
returns a string of both names joined together with a space.
i used a template literal but i could have used a + sign
here is an example of + sign
return firstName + ' ' + secondName;
*/

function putNamesTogether(firstName, secondName) {
   
   return `${firstName} ${secondName}`;
}
 
let test1 =  putNamesTogether('Grumpa', 'Dishdon') // returns 'Grumpa Dishdon'
let test2 =  putNamesTogether('Maran', 'Hask') // returns 'Maran Hask'
let test3 =  putNamesTogether('Len', 'Pop') // returns 'Len Pop'

console.log(`Your result is [${test1}]  and should be equal to [Grumpa Dishdon].`)
console.log(`Your result is [${test2}]  and should be equal to [Maran Hask].`)
console.log(`Your result is [${test3}]  and should be equal to [Len Pop].`)

 // to run use node putNamesTogether.js