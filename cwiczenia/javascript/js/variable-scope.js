'use strict';

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2500;

var sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log('W głównym programie suma kasy ' + sumaKasy);

function policzSumeKasy(iloscOsoba1,iloscOsoba2,iloscOsoba3) {
//    sumaKasy = 500;
    var suma = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;
    
    var sumaKasy = iloscOsoba1 + iloscOsoba2;
    console.log('W funkcji suma kasy: ' + sumaKasy)
    console.log('W funkcji suma kasy: ' + suma);
    
    return suma;
}
//policzSumeKasy(0,0,0);
console.log(policzSumeKasy(10,20,30));
console.log(suma);
console.log('W glownym programie po wykonaniu funkcji suma kasy: ' + sumaKasy);