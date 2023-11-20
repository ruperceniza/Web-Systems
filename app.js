const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
    console.log(name)
    rl.question('Enter your age: ', (age) => {
        console.log(age)
        rl.close()
    })
})


