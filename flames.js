function flames(fname, sname, total) {
    let overall
    for(let i = 0; i < fname.length; i++) {
        count = 0 }
        for(let j = 0; sname.length; j++) {
            if(fname[i] == sname[j]) {
                count += 1
            }
        }
    if(fname && sname == flamesarray[0]) {
        overall = "Friends"
    }
    else if(fname && sname == flamesarray[1]) {
        overall = "Lover"
    }
    else if(fname && sname == flamesarray[2]) {
        overall = "Annulment"
    }
    else if(fname && sname == flamesarray[3]) {
        overall = "Married"
    }
    else if(fname && sname == flamesarray[4]) {
        overall = "Estranged"
    }
    else if(fname && sname == flamesarray[5]) {
        overall = "Sidechick"
    }
    else {
        overall = "Maypa manguyab ka kaysa sig ritual2"
    }
}
    return overall

let flamesarray = ["Friends" , "Lover", "Annulment", "Married", "Estranged", "Sidechick"]

let fname = "John LLoyd Cruz"
let sname = "Bea ALonzo"
let total = flamesarray[i]
let result = flames(fname, sname, total)
console.log(result)




