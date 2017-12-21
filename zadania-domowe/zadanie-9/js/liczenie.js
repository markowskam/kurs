function liczenie(tablica) {
    var tablica = [1, 2, 3, 4, 5, 6];

    var suma = 0;
    var iloczyn = 1;
    for (i = 0; i < tablica.length; i++) {
        suma += tablica[i];
        iloczyn *= tablica[i];
    }
    
    console.log(suma);
    console.log(iloczyn);
}

liczenie();


//function liczenie() {
//    var tablica = [1, 2, 3, 4, 5, 6];
//
//    if (tablica.length > 0) {
//
//        var suma = tablica[0];
//        var iloczyn = tablica[0];
//
//        for (i = 1; i < tablica.length; i++) {
//            suma += tablica[i];
//            iloczyn *= tablica[i];
