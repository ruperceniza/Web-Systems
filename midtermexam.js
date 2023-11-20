/*1. let skills = ["QQQQ", "QWE", "R", "WWWR", "QQWR"]
Output:
invalid combination
invalid combination
invalid combination
E.M.P. Mana used: 175. Mana left: 325
Ghost Walk. Mana used: 175. Mana left: 150
2. let skills = ["EEQR", "WWER", "QQQR", "QQER", "EEQR"]
Output:
Forge Spirit. Mana used: 75. Mana left: 425
Alacrity. Mana used: 90. Mana left: 335 
Cold Snap. Mana used: 90. Mana left: 245 
Ice Wall. Mana used: 125. Mana left: 120 
Forge Spirit. Mana used: 75. Mana left: 45
3. let skills = ["ABC", "123", "DoReMi", "?!@-", "QWER"]
Output:
invalid combination
invalid combination
invalid combination
invalid combination
Deafening Blast. Mana used: 250. Mana left: 250
4. let skills = ["WWQR", "EEWR", "QWER", "QQQR", "EEER"]
Output:
Tornado. Mana used: 140. Mana left: 360
Chaos Meteor. Mana used: 200. Mana left: 160 
Deafening Blast. Mana used: 250. Mana left: -90
Not enough mana
Not enough mana
5. let skills = ["EEER", "EEER", "E", "ERE", "EEER"]
Output:
Sunstrike. Mana used: 175. Mana left: 325
Sunstrike. Mana used: 175. Mana left: 150
invalid combination
invalid combination
Sunstrike. Mana used: 175. Mana left: -25*/


function invokerdota(spell) {
    let mana = 500 //minuend

    for(let i = 0; 1 < spell.length; i++) {
        if(spell[i] == "QQQR") {
            if(mana >= 1) {
                mana -=90
                console.log("Cold Snap. Mana used: 90. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")
            }
        }
        else if(spell[i] == "QOWR") {
            if(mana >= 1) {
                mana -= 175
                console.log("Ghost Walk. Mana used: 175. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")
            }
        }
        else if(spell[i] == "QQER") {
            if(mana >= 1) {
                mana -= 125
                console.log("Ice Wall. Mana Used: 125. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")
            }
        }
        else if(spell[i] == "WWWR") {
            if(mana >= 1) {
                mana -= 175
                console.log("E.M.P. Mana Used: 175. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")
            }
        }
        else if(spell[i] == "WWQR") {
            if(mana >= 1) {
                mana -= 140
                console.log("Tornado. Mana Used: 140. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")
            }
        }
        else if(spell[i] == "WWER") {
            if(mana >= 1) {
                mana -= 90
                console.log("Alacrity. Mana Used: 90. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")
            }        
        }
        else if(spell[i] == "EEER") {
            if(mana >= 1) {
                mana -= 175
                console.log("Sunstrike. Mana Used: 175. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")
            }
        }
        else if(spell[i] == "EEQR") {
            if(mana >= 1) {
                mana -= 75
                console.log("Forge Spirit. Mana Used: 75. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")    
            }
        }
        else if(spell[i] == "EEWR") {
            if(mana >= 1) {
                mana -= 200
                console.log("Chaos Meteor. Mana Used: 200. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!") 
            }
        }
        else if(spell[i] == "QWER") {
            if(mana >= 1) {
                mana -= 250
                console.log("Deafening Blast. Mana Used: 250. Mana left: ", mana)
            }
            else {
                console.log("Not Enough Mana!")  
            }
        }
        else {
            console.log("DID I MISCAST?(Invalid Combination)")
        }
    }
}
let skills = ["QQQQ", "QWE", "R", "WWWR", "QQWR"]
invokerdota(skills)  

