'use strict';

var checkboxes = document.querySelectorAll("input[type = checkbox]");

function walidujFormularz() {

    var wiadomosc = document.getElementById('wiadomosc');

    wiadomosc.innerHTML = '';

    if (document.getElementById('name').value.trim().length < 1) {
        var msgImie = document.createElement('li');
        msgImie.innerHTML = 'Wpisz imię!';
        wiadomosc.appendChild(msgImie);

        event.preventDefault();
    }

    if (document.getElementById('email').value.trim().length < 1) {
        var adres = document.createElement('li');
        adres.innerHTML = 'Wpisz e-mail!';
        wiadomosc.appendChild(adres);

        event.preventDefault();
    }



    if (!checkboxes[0].checked) {
        var zgoda = document.createElement('li');
        zgoda.innerHTML = 'Zaznacz, że wyrażasz zgodę pierwszą';
        wiadomosc.appendChild(zgoda);
        event.preventDefault();
    }


}
document.getElementById('wyslij').addEventListener('click', walidujFormularz);


function setChecks() {
    if (checkboxes[2].checked) {
        checkboxes[0].checked = true;
        checkboxes[1].checked = true;
    }
}
document.querySelectorAll("input[type = checkbox]")[2].addEventListener('click', setChecks);
