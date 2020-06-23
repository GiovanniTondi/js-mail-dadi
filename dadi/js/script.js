/*
    creare un mini gioco in cui si lanciano due dadi, uno per il computer e uno per il giocatore e si determina chi ha vinto.
*/

var btn = document.getElementById('btn');
var user;
var cpu;
var esito;
var primoLancio = true;

btn.addEventListener("click", function() {

    user = Math.floor(Math.random() * (6 + 1));
    cpu = Math.floor(Math.random() * (6 + 1));

    if (user > cpu) {
        esito = "HAI VINTO!";
    } else if (cpu > user) {
        esito = "HA VINTO LA CPU!";
    } else {
        esito = "PAREGGIO!";
    }

    document.getElementById('title').innerHTML = esito;
    document.getElementById('user').innerHTML = user;
    document.getElementById('cpu').innerHTML = cpu;

    if (primoLancio) {
        primoLancio = false;
        btn.innerHTML = "Gioca di nuovo!";
        document.getElementById('table').classList.remove("hidden");
    }
});
