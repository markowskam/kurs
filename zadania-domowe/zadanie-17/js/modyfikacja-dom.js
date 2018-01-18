$(function () {

    //    console.log($('p:last'))
    //    console.log($('p:last').text()) 
    //    console.log($('przycisk1').click());

    $('#przycisk1').click(function () {

        $('p:first').clone().insertBefore('p:first');
        $('p:first').text($('p:last').text());
        $('p:last').remove();
    });


    $('#przycisk2').click(function () {

        $('p:last').clone().insertBefore('p:last');
        $('p:last').text($('p:first').text());
        $('p:first').remove();

    });

});
