const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1El =""
let pw2El =""


function generatePW(){

    for(let i=0; i < 15; i++){
        let character1 = Math.floor(Math.random()* characters.length)
        let pw1El = document.getElementById("pw1-El")
        if(pw1El ===""){
            pw1El.textContent += characters[character1]
        } else {
            pw1El.textContent =""
        for(let i=0; i < 15; i++){
            let character1 = Math.floor(Math.random()* characters.length)
            pw1El.textContent += characters[character1]
        }
        }
    
        let character2 = Math.floor(Math.random()* characters.length)
        let pw2El = document.getElementById("pw2-El")
        if(pw2El ===""){
            pw2El.textContent += characters[character2]
        } else {
            pw2El.textContent =""
        for(let i=0; i < 15; i++){
            let character2 = Math.floor(Math.random()* characters.length)
            pw2El.textContent += characters[character2]
        }
        }    }
}





