'use strict';

var imie;
var imieDamskie = 'Kaja';
var wiek = 37;

imie = imieDamskie;

console.log(imie);
console.log(wiek);





function wyswietlZmienna() {
    
//    tutaj kod funkcji
    var nazwisko = "kowalski";
    console.log(nazwisko);
//    funkcja tworzy zmienna i wyswietli ja w konsoli
}

wyswietlZmienna();





var zmienna = function() {
    console.log('funkcja anonimowa');
}
zmienna();






function mnozenie(parametr1, parametr2, parametr3) {
    var wynik = parametr1*parametr2*parametr3;
    console.log('Wynik mnożenia ' + wynik);
  return wynik;
}
mnozenie(3,4,5);



var liczba1 = 5;
var liczba2 = 10;
var liczba3 = 3;

console.log(mnozenie(liczba1, liczba2, liczba3)); //dzieki temu, że mam return, to wartość jest zwracana i moge ja wykorzystac dalej, przez kolejna funkcje console.log
////mnozenie(liczba1, liczba2, liczba3);
//UWAGA! Tu nie ma znaczenia ze nie ma parametr1 tylko liczba1!!!!


