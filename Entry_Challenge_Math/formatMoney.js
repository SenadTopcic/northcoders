/*
Write a function that takes a number (amount) and returns the number formatted into pounds sterling.
I use the toFixed() method to solve this problem, and give minigful names to the variables.
tofixed method returns a string, so i concatinate the string with the pound sign.

*/

function formatMoney(amount) {
    let result = "£" + amount.toFixed(2)
    return result
}

let test1 =  formatMoney(2.33) //returns "£2.33" 
let test2 =  formatMoney(2.338) //returns "£2.34"
let test3 =  formatMoney(1) //returns "£1.00" 

console.log(`Your result is [${test1}] and should be equal to [£2.33].`)
console.log(`Your result is [${test2}] and should be equal to [£2.34].`)
console.log(`Your result is [${test3}] and should be equal to [£1.00].`)

// to run use node formatMoney.js