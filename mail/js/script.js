/*
    far inserire all'utente una mail e controllare se è nell'array, che contiene quelle valide. Dare all'utente un messaggio opportuno.
*/

var btn = document.getElementById('btn');

var mailList = ["esempio@email.it", "ciao@email.it", "prova@gmail.com"];


btn.addEventListener("click", function() {

    var successo = false;

    var email = document.getElementById('email').value;

    for (var i = 0; i < mailList.length; i++) {
        if (mailList[i] == email) {
            successo = true;
        }
    }

    if (successo) {
        alert("Acceso riuscito!");
    } else {
        alert("Indirizzo email non valido!");
    }

});
