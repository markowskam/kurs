$(function(){
    $.ajax({
        url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akad',
        success: function(response) {
//            
//            response.forEach(function(element){
//                console.log(element.userName);
//            });//nie zadziało bo response to nie jest tablica
            console.log(response.userName);
            $('h1').text(response.userName);
        },
        error:function(msg) {
            console.log(msg.statusText);
        }
    });
    
   
});