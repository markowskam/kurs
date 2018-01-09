var napis = "paragraf";
var wyraz = "Akademia108";

function sortowanie(parametrPierwszy) {
    var napisJakoTablica = parametrPierwszy.split(""); //zamiana string na array
    var napisSortowany = napisJakoTablica.sort();
    napisSortowany = napisSortowany.join("");
    return napisSortowany;
    
}

console.log(sortowanie(napis));
console.log(sortowanie(wyraz));