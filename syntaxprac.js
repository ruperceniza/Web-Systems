/*a = "HEllO"
b = 5
c = true
d = [1,2]

console.log(a, typeof a)

console.log(b, typeof b)

console.log(c, typeof c)

console.log(d, typeof d)*/

/*a = "Tristan"
b = 18

console.log("My name is ", a, "and my age is", b, " years old.")
if(a >= 18) {
    console.log("And I am an Adult")
}
else {
    console.log("I am a minor")
}*/

//let a = "5"
//console.log(parsInt(a) + 10)

/*let arr = ["Hello", "World"]
let var1 = "it"
let var2 = "is"
let var3 = "me"

arr.push(var1, var2, var3);

console.log(arr);*/



/*let a = ["HELLO", "WORLD"]
let b = "its"
let c = "is"
let d = "me"

a.push(b,c,d)
console.log(a)
*/

/*a = [5, 10, 15, 20]

console.log(a[0] + 2)
console.log(a[1] - 2)
console.log(a[2] * 2)
console.log(a[3] / 2)*/

/*let arr = ["Hello", "World"];
let result = "";

for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}

console.log(result);  // Outputs: HelloWorld
*/

/*let a = ["Hello", "World"]
let b = ""

for(let i = 0; i < a.length; i++) {
    b += a[i]
}
console.log(a)*/



let a = [1,2,3,4,5]
let b = [2,4,5]

for(let i = 0; i < a.length; i++) {
    if(!b.includes(a[i])) {
        console.log(a[i])
    }
}