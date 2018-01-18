$(function(){
    
    
//    console.log($('.salary').eq(3).text());
//    console.log($('.salary').text());
    
    $('#count-sum').click(function(){
        
       var suma = 0;
        
        var salary = $('.salary');
        
       for (var i = 0; i < salary.length; i++) {
           
           var kwota = salary.eq(i).text();
           
           kwota = Number(kwota);
           suma += kwota;
       
       }
        
        
        $('#sum').text(suma);
     
    });

});