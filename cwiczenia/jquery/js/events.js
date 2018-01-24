//var naglowek = document.getElementById('first');
//
//naglowek.addEventListener('click', function() {
//    alert('kliknieto w h1');
//});
//
////ale jej nie mozemy odpiac bo jest funkcja anonimowa i nie ma nazwy!!!



$(function() {
    
    function klikH1() {
        alert('kliknieto w H1');
        $('h1').off('click', klikH1); //usuwam event
    }
    
    
    
    //pojedyncze zdarzenie na paragrafie
    
    $('p').click(function() {  //albo nazwa funkcji albo anonimowa po click
        $(this).css('color', "red");
        
    }); //zmieni sie kolor tylko kliknietego p a nie wszystkich p
    
    

    $('h1').on('click', klikH1); //mozna je wylaczyc, usunac event

    $('h1').on({
        'click': klikH1, //albo nazwa funkcji albo anonimowa, jesli bez nawiasow to tylko przypisuje ale nie wywoluje i nie zadziała od razu
        'mouseover': function() {
            $(this).css('color', 'green');
        }
    });
    
    $('h2').hover(function (){
        $(this).css('color', 'yellow');
    }, function () {
        $(this).css('color', '');
    });
                



});

