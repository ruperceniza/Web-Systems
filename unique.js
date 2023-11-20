/*let x = [0,0,1,1,2,3,3,5]//get 2 solo
let y = [1,1,2,2,3,3,4,4,9]//get 9 solo

for(let i = 0; i < y.length; i++){
    let counter = 0
    for(let j = 0; j < y.length; j++){
        if(y[i] == y[j]){
            counter += 1
        }
    }
    if(counter == 1){
        console.log(y[i])
    }
}*/

let x = ["aba", "baba", "aba", "xzxb"]
let y = ["aba", "xzxb", "ab"]

let a = ["xzz", "xy", "xyz", "yyy", "yyy", "yyy", "xyz"]
let b = ["xy", "xyz", "yyy"]

let counterarr = []

for(let i = 0; i < y.length; i++){
    let count = 0
    for(let j = 0; j < x.length; j++){
        if(y[i] == x[j]){
            count += 1

        }
    }
    counterarr[i] = count
}
console.log(counterarr)