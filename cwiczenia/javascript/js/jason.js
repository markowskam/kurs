'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie:'Krystian',
            nazwisko: 'Dziopa',
            wzrost:180,
            zainteresowania: [
                {nazwa: 'podroze'
                },
                
                {nazwa: 'pilka nozna'
                }
            ]
        },
        {
            imie:'ola',
            nazwisko: 'Nowak',
            wzrost:150,
            zainteresowania: [
                {nazwa: 'szydełkowanie'
                },
                
                {nazwa: 'pilka nozna'
                }
            ]  
        }
    ]
}
console.log(jsonOsoby);

jsonOsoby.osoby[0].zainteresowania.forEach(function(element,index) {
    console.log(element.nazwa);
});

jsonOsoby.osoby.forEach(function(element, index){
    console.log(element.imie);
    console.log(element.wzrost);
});