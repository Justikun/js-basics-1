console.log("Welcome to the password validator tool!\n")

//boilerplate code to get user input
const readline = require('readline');

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
console.log("Password requirements:")
console.log("- At least 10 characters")
console.log("- At least 1 uppercase letter")
console.log("- At least 1 number")
console.log("- At least 1 special character. Accepted: !@#$%^&*()?;:")
console.log("- Has NO spaces\n")

reader.question('Enter password:\n', function(answer) {
    hasEnoughCharacters = false
    hasUpperCase = false
    hasNumber = false
    hasSpecialCharacter = false 
    hasNoSpace = false
    
    // check character length
    if (answer.length >= 10) {
        hasEnoughCharacters = true
        // console.log("has 10+")
    }

    var acceptSpecialChar = new RegExp(/[!@#$%^&*()?;:]/); //I have no idea what this new RegExp line does. But it looks like an object. Not sure why I had to do it like this. Maybe .test can only be ran on objects?
    if (acceptSpecialChar.test(answer)) {
        hasSpecialCharacter = true
        // console.log("contains special")
    }  
    
    for (let i=0;i<answer.length;i++) {
        if (answer[i] !== " ") { // checks if it contains a space 
            hasNoSpace = true
            // checks if it contains an uppercase
            if (answer[i] == answer[i].toUpperCase() && isNaN(answer[i])){
                // console.log(answer[i] + " is uppercase")
                hasUpperCase = true
            }
            // checks if it contains a number
            if (!isNaN(answer[i])) {
                hasNumber = true
                // console.log(answer[i] +" is a number")
            }
            
        }
    }
    
    // checks for special character with given format
    if (hasEnoughCharacters && hasUpperCase && hasNumber && hasSpecialCharacter && hasNoSpace) {
        console.log("\nSUCCESS")
    } else {
        console.log("\nFAILED. Please make sure you meet all password requirements")
    }
});
