'use strict';

$(function () {

    $("#przycisk").click(function () {


        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            $('p').text("");
            $('#przycisk').after('<div>' + '<p>' + data.imie + " " + data.nazwisko + '</p>' + '<p>' + data.zawod + '</p>' + '<p>' + data.firma + '</p>' + '</div>');

        });
    });


});
