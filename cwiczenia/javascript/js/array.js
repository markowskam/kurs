'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona);

imiona[3] = 'Ola';
imiona[2] = 'Wojtek';

console.log(imiona);

imiona.push('Miłosz');
//
console.log(imiona.push());
////
console.log(imiona);
//
var ostatniElement = imiona.pop();
console.log(ostatniElement);
//

imiona.unshift('Robert');
console.log(imiona);

console.log(imiona.unshift('Robert'));

//console.log(imiona.shift());
//
//imiona.shift();
//
//console.log(imiona);
//
//console.log(imiona.length);
//
//imiona.reverse();
//console.log(imiona);
//
//imiona.sort();
//console.log(imiona);
//
////var liczby = [1, 2, 0, 10, 12, 100, 55];
////liczby.sort();
////console.log(liczby);

