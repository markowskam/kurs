'use strict';


var jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element, index) {
    console.log(index);
    console.log(element.firstName);
    console.log(element.lastName);
    
});