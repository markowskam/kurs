'use strict';

$(function () {

    $("#przycisk").click(function () {


        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            $('#dane-programisty').html("");

            $('#dane-programisty').append('<p>' + data.imie + " " + data.nazwisko + '</p>' + '<p>' + data.zawod + '</p>' + '<p>' + data.firma + '</p>');

        });
    });




});
