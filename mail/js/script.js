/*
    far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide. Dare all'utente un messaggio opportuno.
*/

var btn = document.getElementById('btn');

var mailList = ["esempio@email.it", "ciao@email.it", "prova@gmail.com"];
var successo = false;

btn.addEventListener("click", function() {

    var email = document.getElementById('email').value;

    for (var i = 0; i < mailList.length; i++) {
        if (mailList[i] == email) {
            successo = true;
        }
    }

    if (successo) {
        alert("Acceso riuscito!");
        successo = false;
    } else {
        alert("Indirizzo email non valido!");
    }

});
