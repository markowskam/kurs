'use strict';


function zamianaWspak() {
    var napis = document.getElementsByTagName('p')[0].innerText;
    var napisJakoTablica = napis.split(""); //zamiana string na array
    var napisWspak = napisJakoTablica.reverse();
    napisWspak = napisWspak.join("");
    console.log(napisWspak)
    
}

zamianaWspak()

function zamiana() {
    var wyraz = document.getElementsByTagName('p')[1].innerText;
    var wyrazJakoTablica = wyraz.split(""); //zamiana string na array
    var wyrazWspak = wyrazJakoTablica.reverse();
    wyrazWspak = wyrazWspak.join("");
    console.log(wyrazWspak)
    
}

zamiana()
