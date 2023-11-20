//let x = [[-9,12,4,-5], [7,10,-4,10], [9,1,-2,11], [3,-8,10,14]]
let x = [[21,2,-6], [10,-7,9], [3,13,-11]]
//let x = [[1,2,3], [4,5,6], [7,8,9]]
//let x = [[11,2,4], [4,5,6], [10,8,-12]]
//let x = [[3,6,9], [4,8,12], [4,10,15]]

let leftright = 0
let rightleft = 0

for(let i = 0; i < x.length; i++) {
    leftright += x[i][i]
}
for(let i = 0; i < x.length; i++) {
    rightleft += x[i][x.length - 1 -i]
}
let total = leftright - rightleft
total = Math.abs(total)
console.log(total)
