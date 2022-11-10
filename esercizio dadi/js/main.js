// creare il gioco dei dadi
let numPc
let numPlayer
let myButton = document.getElementById("lancia");


// generare il numero del pc

// generare il numero del giocatore tramite un pulsante
myButton.addEventListener("click",

    function(){
        numPc = Math.floor(Math.random() * 7);

        document.getElementById("numero_computer").innerHTML = `Numero computer = ${numPc}`

        numPlayer = Math.floor(Math.random() * 7);

        document.getElementById("numero_player").innerHTML = `Il tuo numero = ${numPlayer}`


        // confrontare il numero 
        if(numPlayer > numPc){
            document.getElementById("risultato").innerHTML = `Hai vinto`
        }else if (numPlayer === numPc){
            document.getElementById("risultato").innerHTML = `Avete pareggiato ritenta`
        }else{
            document.getElementById("risultato").innerHTML = `Hai perso ritenta`
        }
        
    }
    
    

);



// se è più alto quello del giocatore ha vinro


// se no ha perso 