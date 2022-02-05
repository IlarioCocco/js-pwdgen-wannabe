    /* 1. chiedo all'utente il suo nome */
    var name = prompt("digita il tuo nome");
    document.getElementById("name")
    

    /* 2. chiedo all'utente il suo cognome */
    var lastname = prompt("digita il tuo cognome");
    document.getElementById("lastname")

    /* 3. chiedo all'utente il suo colore preferito  */
    var colorPrefer = prompt("colorepreferito");
    document.getElementById("colorPrefer")

    /* 4. scrivo sulla pagina nomecognomecolorepreferito40 */
    var password = name += lastname += colorPrefer;
    document.getElementById("password").innerHTML += password += 40;




// prova inserimento età trasformato da stringa a numero con il parseInt
// con verifica stampa console.lod del valore trasformato in un numero intero

// var età = parseInt(prompt("inserisci la tua età"));
// console.log(età);
// document.getElementById("età").innerHTML += età += " anni";




// prova doc concatenazione

    // var name = "Ilario";

    // var lastname = "Cocco";

    // var nameLastname = name + " " + lastname;
    // console.log("il mio nome è" + " " + nameLastname );









