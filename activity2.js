const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Input  ', (process) => {    
    process = parseInt(process)
    
    let o = " is an odd number"
    let e = " is an even number"

    for(let i = 0; i <= process; i++){
        if(i % 5 == 0 && i % 3 == 0 && i % 2 == 0){
            console.log(i + e + " Hello World")
        }
        else if(i % 3 == 0 && i % 2 == 0){
            console.log(i + e + " Hello")
        }
        else if(i % 5 == 0 && i % 3 == 0){
            console.log(i + o + " Hello  World")
        }
        else if(i % 5 == 0){
            console.log(i + o + " World")
        }
        else if(i % 3 == 0){
            console.log(i + o + " Hello")
        }
        else if(i % 2 == 0 & 3 == 0){
            console.log(i + o + " Hello")
        }
        else if(i % 2 == 0){
            console.log(i + e)
        }
        else if(i % 1 == 0){
            console.log(i + o)
        }
        else{
            console.log[i]
        }

    }
    rl.close()
})


