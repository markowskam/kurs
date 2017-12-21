var napis = "paragraf"

function sortowanie(napis) {
    var napisJakoTablica = napis.split(""); //zamiana string na array
    var napisSortowany = napisJakoTablica.sort();
    napisSortowany = napisSortowany.join("");
    return napisSortowany;
    
}

console.log(sortowanie(napis));

var wyraz = "Akademia108"

function poSortowanie(wyraz) {
    var wyrazJakoTablica = wyraz.split(""); //zamiana string na array
    var wyrazPoSortowanie = wyrazJakoTablica.sort();
    wyrazPoSortowanie = wyrazPoSortowanie.join("");
    return wyrazPoSortowanie;
    
}

console.log(poSortowanie(wyraz));