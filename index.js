let passwrd1 = document.getElementById("random-password-1")
let passwrd2 = document.getElementById("random-password-2")

let generateEl = document.getElementById("gen-el")
generateEl.addEventListener("click", getPassword)


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordlength = 15

function getCharacter() {
    let randomChar = Math.floor(Math.random()*characters.length)
    return characters[randomChar]
}

function getPassword() {
    let randomPassword = ""
    for(let i =0; i<passwordlength; i++){
        randomPassword += getCharacter()
    }
    return randomPassword
}

 passwrd1.textContent= getPassword();
 passwrd2.textContent= getPassword();

