/*function statements(x) {
    console.log("HELLO WORLD", x)
}

let x = "JOHN LLOYD"
statements(x)
*/

/*function statement(a, b, c) {
    console.log(a+b+c)
}

let x = 10
let y = 23
let z = 2
statement(x, y, z)
*/

function calcu(num1, num2, operation) {
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
console.log(result)