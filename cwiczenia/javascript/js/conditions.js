'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 190;

/* Warunek if*/

if (wzrostOlgi < wzrostMateusz) {
    console.log("olga jest niższa");
}


/* Warunek if else*/
if (wzrostOlgi < wzrostMateusz) {
    console.log("olga jest niższa");
}
 else {
     console.log("olga nie jest niższa");
 }


/* Warunek if else*/
if (wzrostOlgi < wzrostMateusz) {
    console.log("olga jest niższa");
}

else if (wzrostOlgi == wzrostMateusz) {
    console.log("olga tak wysoka jak Mateusz");
}

else {
    console.log("olga jest wyzsza");
    
}


/*Warunek switch*/

var color = 'zielony';
switch (color) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('inny kolor');
        
}