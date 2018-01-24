//$(function(){
//    
//    $('#przycisk').click(function(){
//    $.getJSON('http://jsonplaceholder.typicode.com/users',          function(data){
//        $('#lista-uzytkownikow').text('');
////         data.forEach(function(element,index){
//////        console.log(element.username);
////             $('#lista-uzytkownikow'.append(element.username + '<br>');
//         for (var i =0; i < data.length; i++) {
//                   $('#lista-uzytkownikow').append(data[i].username + '<br>'); 
//                }
//        
//        
//        
//        });
//          //nazwa funkcji lub anonimowa - ale najczesciej anonimowa, o parametrze data lub response - w sumie dowolna nazwa
////         console.log(data);
//     });
//        
//    });
//    
////     $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akad', function(data){
////          //nazwa funkcji lub anonimowa - ale najczesciej anonimowa, o parametrze data lub response - w sumie dowolna nazwa
////         console.log(data.userName);
////     });
//    
//    
// }); 
              
    
    'use strict';

$(function () {

    $('#przycisk').click(function () {
        $.getJSON('https://jsonplaceholder.typicode.com/users', function (data) {
            $('#lista-uzytkownikow').text('');
//            data.forEach(function(element,index){
//                $('#lista-uzytkownikow').append(element.username + '<br>');
                
                for (var i =0; i < data.length; i++) {
                   $('#lista-uzytkownikow').append(data[i].username + '<br>'); 
                }
                
            });
        });
    });