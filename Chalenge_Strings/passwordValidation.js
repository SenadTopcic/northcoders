/*
Northcoders takes security very seriously. We have a VERY robust password criteria.

Any password must include 'n' and 'c' (upper or lowercase) and must end with '1'.

Design this function to check the password that is passed to it. If it fulfills all of the above 
criteria then you should return 'valid'. Otherwise, return 'invalid'.
*/
function passwordValidation(password) {
    let isValid = false; //initialise to false
    let result = 'invalid'; //initialise to invalid

    //check if password is less than 3 characters return invalid
    if (password.length < 3) {
        return result;
    }
    //check if password ends with 1 and if it does check if it contains n and c
    if (password[password.length - 1] === '1') {
        isValid = true;
        if(isValid)
        isValid = password.toLowerCase().includes('c')
        if(isValid)
        isValid = password.toLowerCase().includes('n')
    }
    return  (isValid) ? result = 'valid': result = 'invalid';
}

let test1 =  passwordValidation("northcoders1") // returns 'valid'
let test2 =  passwordValidation("NORTHCODERS1") // returns 'valid'
let test3 =  passwordValidation("nope1") // returns 'invalid'
let test4 =  passwordValidation("northcoders") // returns 'invalid'

console.log(`Your result is [${test1}]  and should be equal to [valid].`)
console.log(`Your result is [${test2}]  and should be equal to [valid].`)
console.log(`Your result is [${test3}]  and should be equal to [invalid].`)
console.log(`Your result is [${test4}]  and should be equal to [invalid].`)
