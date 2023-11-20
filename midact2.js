// 19:45:17
//03:30:29
//00:00:00
//23:59:59

/*let a = "07:45:17PM"
am = false
pm = false
a = a.split(":")
for ( let i = 0; i < a.length; i++ ) {
    if ( parseInt(a[0] > 12 && a[2][1] == 'A') ) {
        a[0] = parseInt(a[0]) - 12
    }
    else if ( parseInt(a[8]) == 12 && a[2][1] == 'A' ) {
        a[0] = "00"
    }
    else if ( parseInt(a[0] == 12 && a[2][i] == 'P') ) {
        a[0] == "12"
        pm = false
    }
    else if ( parseInt(a[0]) < 12 && a[2][i] == 'P') {
        a[0] = parseInt(a[0]) + 12
        pm = true
    }
}

let result
if ( pm !== true) {
    let aa = a[2].split("a")
    aaa = a[0] + ":" + a[1] + ":" + aa[0]
}
else if ( pm === true) {
    let aa = a[2].split("p")
    aaa = a[0] + ":" + a[1] + ":" + aa[0]
}
console.log(result)*/

let a = "07:45:17PM"
//a = parseInt(a)
am = false
pm = false
a = a.split(":")
for ( let i = 0; i < a.length; i++ ) {
    if ( a[0] > 12 && a[2][1] == 'A')  {
        a[0] -= 12
    }
    else if ( a[8] == 12 && a[2][1] == 'A' ) {
        a[0] = "00"
    }
    else if ( a[0] == 12 && a[2][i] == 'P' )  {
        a[0] == "12"
        pm = false
    }
    else if ( (a[0]) < 12 && a[2][i] == 'P') {
        a[0] += 12
        pm = true
    }
}

let result
if ( pm !== true) {
    let aa = a[2].split("a")
    aaa = a[0] + ":" + a[1] + ":" + aa[0]
}
else if ( pm === true) {
    let aa = a[2].split("p")
    aaa = a[0] + ":" + a[1] + ":" + aa[0]
}
console.log(result)
/*let a = "07:45:17 p"
a = parseInt(a)
am = false
pm = false
a = a.split(":")
for ( let i = 0; i < a.length; i++ ) {
    if ( a[0] > 12 && a[2][1] == 'a')  {
        a[0] -= 12
    }
    else if ( a[8] == 12 && a[2][1] == 'a' ) {
        a[0] = "00"
    }
    else if ( a[0] == 12 && a[2][i] == 'p' )  {
        a[0] == "12"
        pm = false
    }
    else if ( (a[0]) < 12 && a[2][i] == 'p') {
        a[0] += 12
        pm = true
    }
}*/

/*let a = "07:45:17PM"
am = false
pm = false
a = a.split(":")
for ( let i = 0; i < a.length; i++ ) {
    if ( parseInt(a[0]) < 12 && a[2][i] == 'P') {
        a[0] = parseInt(a[0]) + 12
        pm = true
    }
    else if ( parseInt(a[0] == 12 && a[2][i] == 'P') ) {
        a[0] == "12"
        pm = false
    }
    else if ( parseInt(a[0] > 12 && a[2][1] == 'A') ) {
        a[0] = parseInt(a[0]) - 12
    }
    else if ( parseInt(a[8]) == 12 && a[2][1] == 'A' ) {
        a[0] = "00"
    }
}

let result
if ( pm !== true) {
    let aa = a[2].split("a")
    aaa = a[0] + ":" + a[1] + ":" + aa[0]
}
else if ( pm === true) {
    let aa = a[2].split("p")
    aaa = a[0] + ":" + a[1] + ":" + aa[0]
}
console.log(result)*/