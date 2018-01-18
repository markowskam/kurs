$(function () {



    $('button').click(function () {

        $('#kwadrat').animate({
            width: '100px',
            height: '100px',
            marginLeft: '100px'
        }, 3000, zmianaKoloru)

        function zmianaKoloru() {
            $('#kwadrat').animate({
                backgroundColor: 'blue'
            }, 5000, wyswietlNapis);

        }

        function wyswietlNapis() {
            $('#kwadrat').html('<h2>Animacja zakończona</h2>').css('font-size', '70%');
        }


    });


});
