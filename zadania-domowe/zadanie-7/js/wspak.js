'use strict';

var napis = "Paragraf"

function zamianaWspak(napis) {
    var napisJakoTablica = napis.split(""); //zamiana string na array
    var napisWspak = napisJakoTablica.reverse();
    napisWspak = napisWspak.join("");
    return napisWspak;
    
}
 console.log(zamianaWspak(napis));

 var wyraz = "Akademia108"

function zamiana(wyraz) {
    var wyrazJakoTablica = wyraz.split(""); //zamiana string na array
    var wyrazWspak = wyrazJakoTablica.reverse();
    wyrazWspak = wyrazWspak.join("");
    console.log(wyrazWspak)
    
}
zamiana(wyraz);
