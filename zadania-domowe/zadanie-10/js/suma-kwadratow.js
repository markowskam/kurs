'use strict';


 var tablica = [0, 1, 2, 3, 4, 5];

function sumowanieKwadratowLiczb(tablica) {
    
    
    var sumaKwadratow = 0;
    for (var i = 0; i < tablica.length; i++) {
        var kwadraty = Math.pow(tablica[i], 2);
        sumaKwadratow += kwadraty;
    } 
   return sumaKwadratow;
}

console.log(sumowanieKwadratowLiczb(tablica));
