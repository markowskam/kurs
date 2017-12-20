'use strict';

function alarm(event) {
    event.preventDefault(); //zapobiegamy domyslnej akcji
    console.log('kliknieto w link')
    console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];
secondLink.onclick = alarm;

//lub

var thirdLink = document.getElementsByTagName('a')[2];
    thirdLink.addEventListener('click', alarm);

    thirdLink.removeEventListener('click', alarm);

//thirdLink.removeEventListener('click', function(){
//    alert('funkcja anonimowa');
//});


function klikHeader() {
    console.log('Kliknołeś w Header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader; //zlicza liczbe klikniec


function klikH1() {
    event.stopPropagation();
    console.log('Kliknąłeś w H1');
}

document.getElementsByTagName('h1')[0].onclick= klikH1;

