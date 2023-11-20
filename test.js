let userWeapons = ["rock", "paper", "scissors", "rock", "rock"]
let userScore = 0
let botScore = 0

function human(userWeapon) {
let botWeapons = ["rock", "paper", "scissors"]

let a = Math.floor(Math.random() * botWeapons.length);
let botWeapon = botWeapons[a]

console.log(userWeapon + " vs " + botWeapon)

if (userWeapon == botWeapon) {
return "draw"
} else if (
(userWeapon == "rock" && botWeapon == "scissors") ||
(userWeapon == "paper" && botWeapon == "rock") ||
(userWeapon == "scissors" && botWeapon == "paper")
) {
userScore++
return "user"
} else {
botScore++
return "robot"
}
}

for (let i = 0; i < 5; i++) {
let userWeapon = userWeapons[i]
let result = human(userWeapon)
console.log("human " + (i + 1) + ": " + result + " wins!");
}

if (userScore > botScore) {
console.log ("human won with " + userScore + " points.");
} else if (userScore < botScore) {
console.log ("Robot won with " + botScore + " points.");
} else {(userScore == botScore)
console.log ("Draw!! Both have " + userScore + " points");
}