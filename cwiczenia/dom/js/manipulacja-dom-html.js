//'use strict';
//
//var mainHeader = document.getElementById('main-header');
//
//mainHeader.innerHTML = 'Tresc naglowka';
//
//var p = document.querySelector('header').children[0];
//console.log(p);
//console.log(p.innerHTML);
//console.log(p.innerText);
//console.log(p.outerHTML);
//
//
//var link = document.getElementByClassName('link')[0];
//link.href = "https://google.pl";
//link.className += 'nowa-klasa';
//
//mainHeader.style.color = '#11aa22';
//To ponizej jest prawidlowe...

'use strict';

var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = 'Treść nagłówka';

var p = document.querySelector('header').children[0];
console.log(p);
console.log(p.innerHTML);
console.log(p.innerText);
console.log(p.outerHTML);

var link = document.getElementsByClassName('link')[0];

link.href = 'http://google.pl';
link.className += 'nowa klasa'; //link.className = link.className + 'nowa-klas';

mainHeader.style.color = '#11aa22';