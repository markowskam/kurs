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
    console.log("Pracownik o indeksie " + index + " to " + element.firstName + " " + element.lastName + ".");
//    console.log(element.firstName);
//    console.log(element.lastName);
//    
});