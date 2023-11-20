
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Operation', (process) => {
    rl.question('first number:', (x) => {
    x = parseInt(x)
        rl.question('second number:', (y) => {
            y = parseInt(y)

            if(process === 'add'){
            console.log('sum', x+y)
            }
            else if(process === 'subtract'){
            console.log('difference', x-y)
            }
            else if(process === 'divide'){
            console.log('quotient', x/y)
            }
            else if(process === 'multiply'){
            console.log('product', x*y)
            }
            else{
            console.log('invalid. Please try again.')
            }
            rl.close()
        })
    })
})



/*if (math = '+'){
    console.log(value1 + value2)
    elseif(math = '-')
        console.log(value1 - value2)
            elseif(math = '*')
                console.log(value1 * value2)
                    elseif(math = '/')
                        console.log(value1 / value2)  
}
*/
   /* if (math = '-'){
        console.log(value1 - value2)
    }
        if (math = '*'){
            console.log(value1 * value2)
        }
            if (math = '/'){
                console.log(value1 / value2)
            }
            rl.close()
            */
    


