'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[2];
console.log(istniejacyWezel);

var newElement = document.createElement('p');//stworz nowy element p
var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworzenie nowego tekstu do paragrafu

newElement.appendChild(newElementContent);
console.log(newElement); //dodaj tekst do elementu p

istniejacyWezel.appendChild(newElement); //w html tego nie ma ale w przegladarce to juz widac

istniejacyWezel.removeChild(newElement);


var parFirstDiv = document.getElementById('parFirst');

parFirstDiv.replaceChild(newElement, istniejacyWezel); //zamiast div ma byc nowy paragraf



var allLinks = document.getElementsByTagName('a');



for (var i = 0; i < allLinks.length; i++) {
   var br = document.createElement('br');
   allLinks[i].removeAttribute('class');
   allLinks[i].parentElement.insertBefore(br, allLinks[i].nextElementSibling);
////wstawilo po kazdym <a> br, usuwamy klasy link 
}

//allLinks.forEach(function(element) {
//    var br = document.createElement('br');
//    element.removeAttribute('class');
//    element.parentElement.insertBefore(br, allLinks.nextElementSibling);
//}); //alternatywa z forEach - to nie działa po get element by ID nie zwraca listy tylko html collection trzeba zrobic get element po selektorze i powinno zadzialac//