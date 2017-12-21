'use strict';


function fibbonaci(n) {
    
    if (n==1 || n==2 ) {
        return 1;
    }
    else {
        
        var suma = fibbonaci(n-2) + fibbonaci(n-1);
        return suma;
        
    }    
    
}

console.log(fibbonaci(7));
