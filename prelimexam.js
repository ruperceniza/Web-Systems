
/*left to right = 1,5,9
right to left = 3,5,7
123  11,2,4   3,6,9    -9,12,4,-5   21,2,-6 
456  4,5,6    4,8,12   7,10,-4,10   10,-7,9
789  10,8,-12 4,10,15  9,1,-2,11    3,13,-11
                       3,-8,16,14
  output = 0,15,5,18,13                     
*/
/*
let a = [[1,2,3], [4,5,6], [7,8,9]]
for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < a[i].length; j++) {
        sum1 = a[0][0] + a[1][1] + a[2][2]
        sum2 = a[0][2] + a[1][1] + a[2][0]

        sum3 = Math.abs(sum1 - sum2)
        console.log(sum3)
    }
}*/

/*let a = [[1,2,3], [4,5,6], [7,8,9]]
sum1 = a[0][0] + a[1][1] + a[2][2]
sum2 = a[0][2] + a[1][1] + a[2][0]
sum3 = Math.abs(sum1 - sum2)
console.log(sum3)*/
//let a = [[1,2,3], [4,5,6], [7,8,9]]
//let a = [[11,2,4], [4,5,6], [10,8,-12]]
//let a = [[3,6,9], [4,8,12], [4,10,15]]
//let a = [[-9,12,4,-5], [7,10,-4,10], [9,1,-2,11], [3,-8,16,14]]
//let a = [[21,2,-6], [10,-7,9], [3,13,-11]]
/*if(a == a[0,0],a[0,1],a[0,2],a[0,3],a[1,0],a[1,1],a[1,2],a[1,3],a[2,0],a[2,1],a[2,2],a[2,3],a[3,0],a[3,1],a[3,2],a[3,3]) {
    sum4 = a[0][0] + a[1]+[1] + a[2][2] + a[3][3] 
    sum5 = a[0][3] + a[1][2] + a[2][1] + a[3][0]
    sum6 = Math.abs(sum4-sum5)
    console.log(sum6)
}
else if(a == a[0,0],a[0,1],a[0,2],a[1,0],a[1,1],a[1,2],a[2,0],a[2,1],a[2,2]) {
    sum1 = a[0][0] + a[1][1] + a[2][2]
        sum2 = a[0][2] + a[1][1] + a[2][0]

        sum3 = Math.abs(sum1 - sum2)
        console.log(sum3)

}*/
//let a = [[1,2,3], [4,5,6], [7,8,9]]
//let a = [[11,2,4], [4,5,6], [10,8,-12]]
//let a = [[3,6,9], [4,8,12], [4,10,15]]
let a = [[-9,12,4,-5], [7,10,-4,10], [9,1,-2,11], [3,-8,16,14]]
//let a = [[21,2,-6], [10,-7,9], [3,13,-11]]
if(a == a[0,0],a[0,1],a[0,2],a[1,0],a[1,1],a[1,2],a[2,0],a[2,1],a[2,2]) {
    sum1 = a[0][0] + a[1][1] + a[2][2] 
    sum2 = a[0][2] + a[1][1] + a[2][0]
    sum3 = Math.abs(sum1 - sum2 )
    console.log(sum3)
}
else {
    sum1 = a[0][0] + a[1][1] + a[2][2] + a[3][3] 
    sum2 = a[0][3] + a[1][2] + a[2][1] + a[3][0]
    sum3 = Math.abs(sum1 - sum2)
    console.log(sum3)
}
