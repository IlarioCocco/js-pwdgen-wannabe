    var nome = prompt("digita il tuo nome");
    document.getElementById("nome").innerHTML += nome;


    /* 2. chiedo all'utente il suo cognome */
    var cognome = prompt("dgita il tuo cognome");
    document.getElementById("cognome").innerHTML += cognome;


    /* 3. chiedo all'utente il suo colore preferito  */
    var colorepreferito = prompt("colorepreferito");
    document.getElementById("colorepreferito").innerHTML += colorepreferito;

    /* 4. scrivo sulla pagina nomecognomecolorepreferito40 */
    var password = nome + cognome + colorepreferito + 40;
    document.getElementById("password").innerHTML += password;





