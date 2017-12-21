
function sortowanie() {
    var napis = document.getElementsByTagName('p')[0].innerText;
    var napisJakoTablica = napis.split(""); //zamiana string na array
    var napisSortowany = napisJakoTablica.sort();
    napisSortowany = napisSortowany.join("");
    console.log(napisSortowany)
    
}

sortowanie()

function poSortowanie() {
    var wyraz = document.getElementsByTagName('p')[1].innerText;
    var wyrazJakoTablica = wyraz.split(""); //zamiana string na array
    var wyrazPoSortowanie = wyrazJakoTablica.sort();
    wyrazPoSortowanie = wyrazPoSortowanie.join("");
    console.log(wyrazPoSortowanie)
    
}

poSortowanie()