var zwierzeta = ['pies', 'kot', 'rybki'];


//var licznik = 0
////while (licznik < zwierzeta.length) {
////    console.log(zwierzeta[licznik]);
////    licznik++;
////}
//
//do {
//    console.log(zwierzeta[licznik]);
//    licznik++;
//} while (licznik < zwierzeta.length);

//for (var i = 0; i < zwierzeta.length; i++) {
//    console.log(zwierzeta[i]);
//}

//zwierzeta.forEach(function(element, index) {
//    console.log(element);
//});

$(function(){
    var paragrafy = $('body').find('p').eq(1); //equotes i w nawiasie index
    console.log(paragrafy);
    
    $('body').find('p').eq(1).css('color', 'green');
    
    //petla each - dodaje do paragrafow kalse z kolejnym numerem
    $('p').each(function(index, element){
        $(this).addClass('paragraf-' + index);
    });
    
});


