'use strict';

var napis = "Paragraf"
var wyraz = "Akademia108"

function zamianaWspak(parametrPierwszy) {
    var napisJakoTablica = parametrPierwszy.split(""); //zamiana string na array
    var napisWspak = napisJakoTablica.reverse();
    napisWspak = napisWspak.join("");
    return napisWspak;
    
}
 console.log(zamianaWspak(napis));
 console.log(zamianaWspak(wyraz));