'use strict';

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    
    opiszKsiazke() {
        var opis = "Ksiazka ma tytuł " + this.tytul + ", " + "autorem jest " + this.autor;
        
        if (this.przeczytana) {
           opis += " i została przeczytana.";
        }
        else {
          opis += " i nie została przeczytana.";
        } 
        return opis;
    }
}

var lekturaPierwsza = new Ksiazka('Wiedzmin', 'Sapkowski', true);
var lekturaDruga = new Ksiazka ('Bolek', 'Kowalski', false);
var lekturaTrzecia = new Ksiazka ('Lolek', 'Nowak', false);

var tablicaGlobalna = [lekturaPierwsza, lekturaDruga, lekturaTrzecia];

function iloscPrzeczytanych(tablicaObiektow) {
    var wynik = 0;
    for (var i = 0; i < tablicaObiektow.length; i++) {
        if (tablicaObiektow[i].przeczytana) {
            wynik += 1;
        }
        var opisKsiazki = tablicaObiektow[i].opiszKsiazke(); 
        console.log(opisKsiazki);
    } 
    return wynik;
}

console.log(iloscPrzeczytanych(tablicaGlobalna));
