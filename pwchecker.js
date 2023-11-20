const readline = require('readline')

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter your password: ', (password) => {
    let upperCount = 0
    let lowerCount = 0
    let numCount = 0
    let speccharCount = 0

    for(let i = 0; i < password.length; i++) {
        let char = password[i]

        if('A' <= char && char <= 'Z') {
            upperCount++
        }
        else if('a' <= char && char <= 'z') {
            lowerCount++
        }
        else if('0' <= char && char <= '9') {
            numCount++
        }
        else if(char === '!' || char === '@' || char === '#' || char === '$' || char === '%' || char === '^' || char === '&' || char === '*' ) {
            speccharCount++
        }
    }
    console.log("Total Characters : " +password.length)
    console.log("Total Uppercase Letters:: " +upperCount)
    console.log("Total Lowercase Letters:  " +lowerCount)
    console.log("Total Numbers: " +numCount)
    console.log("Total Special Characters: " +speccharCount)

    if(password.length >= 8 && upperCount > 0 && lowerCount >= 5 && numCount > 0 && speccharCount > 0) {
        console.log("Password Strength: Strong")
    }
    else {
        console.log("Password Strength: Weak")
    }
    rl.close()

})