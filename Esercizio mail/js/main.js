// capire se l'utente ha l'invito

let mail 

// crea array con tutte le mail degli invitati
const invitati = ["pino@gmail.com", "giovannirossi@gmail.com", "lorenzocrett@gmail.com",  "matteouccio@gmail.com", "chiarapl@gmail.com", "babafab@gmail.com", "luciasanta@gmail.com", "pinopinguino@libero.com", "nicolaluce@libero.com", "torioup@server.com",]

// chiedi all'utente la sua mail
mail = prompt("Inserisci la tua mail per scoprire se hai l'invito")

console.log(mail)

let puoiEntrare = false

for(let i = 0; i<invitati.length; i++){
    console.log(invitati [i])
    
    if(mail === invitati [i]){
        puoiEntrare = true
    }
}

if(puoiEntrare == true){
    console.log("Puoi entrare")
}else{
    console.log("non puoi entrare")
}

