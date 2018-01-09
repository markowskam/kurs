'use strict';

var liczby = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function sortujBabelkowo(tablica) {
    
    var zamiana;
    var zmiennaPomocnicza;
    
    do {
        
        zamiana = false;
        
        for (var i = 0; i < tablica.length - 1; i++) {
            if (tablica[i] > tablica[i+1]) {
            
                zmiennaPomocnicza = tablica[i];
                tablica[i] =  tablica[i+1];
                tablica[i+1] = zmiennaPomocnicza;
                

                zamiana = true;
            }
        }
    } while (zamiana);
    
  return tablica;
}

console.log(sortujBabelkowo(liczby));