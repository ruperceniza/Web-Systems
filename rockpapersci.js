/*function calcu(num1, num2, operation) {
    let outcome
    if(operation == "add") {
        outcome = num1 + num2
    }
    else if(operation == "subtract") {
        outcome = num1 - num2
    }
    else if(operation == "multiply") {
        outcome = num1 * num2
    }
    else if(operation == "divide") {
        outcome = num1 / num2
    }
    else {
        outcome = "Unknown Operation"
    }
    return outcome
}

let x = 10
let y = 2
let operation = "divide"
let result = calcu(x, y, operation)
console.log(result)*/
let userWeapons = ["rock", "paper", "scissors", "rock", "rock"]

let myscore = 0

let robotScore = 0


function rps(myWeapon) {

let aiweapon = ["rock", "paper", "scissors"]

let a = Math.floor(Math.random() * aiweapon.length)

let z = aiweapon[a]

console.log("User: " +myWeapon+ " VS AI: " +z)

if (myWeapon == z) {

return "Draw"

}
 else if(

(myWeapon == "rock" && z == "scissors") || (myWeapon == "paper" && z == "rock") || (myWeapon == "scissors" && z == "paper")) {

myscore++

return "User"

} 
else {
robotScore++

return "AI"
}

}

for (let i = 0; i < 5; i++) {

let myWeapon = userWeapons[i]

let result = rps(myWeapon)

console.log("Match " + (i + 1) + " Result: " + result)
}

if (myscore > robotScore) {

console.log ("User won with! Final Score:  " + myscore + " point/s!!")
} 
else if (myscore < robotScore) {
console.log ("AI won with! Final Score:  " + robotScore + " point/s!!")
} 
else {(myscore == robotScore)

console.log ("Draw!! AI and User points:  " + myscore + " point/s!!")
}
    





