'use strict';

/*Petle for*/

for (var i = 1; i < 10; i++) {
    console.log(i);
}


for (var i = 1; i < 5; ) {
    console.log(i++);
}

for (var i = 1; i < 5; ) {
    console.log(++i);
}


//console.log('--------------------------------');
//
for (var i = 1; i < 10; ++i) {
    console.log(i);
}


var liczby = [1, 2, 0, 10, 12, 100, 55];

for (var i = 0; i < liczby.length; i++) {
    console.log(liczby[i]);
}



var tablica = ['Adam', 'Ewa', 'Kacper'];

tablica.forEach(function(element, index) {
    console.log("Element z indexem " + index + " ma wartość " + element);
    
});




var it = 10;
var flaga = true;
while(flaga) {
    console.log(it);
    if(it < 5) {
        flaga = false;
    }
    
    it--;
}




do {
    console.log('Pętla do....while');
    it--;
} while (it > 0);



var a = 0;
while (a < 10) {
    console.log(++a);
    if (a == 5) {
        break;
    }
}