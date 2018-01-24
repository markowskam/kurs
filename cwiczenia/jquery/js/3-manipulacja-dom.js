'use strict';

//aby działały w momencie załadowania

$(function() {
    
    //pobieranie tekstu
    var tekstParagrafuPierwszego = $("p:first");
    console.log(tekstParagrafuPierwszego.text()); //jak .innerText w js
    
    
//    console.log($('p').text()); // zwraca teksty ale zlepione
    
    console.log(tekstParagrafuPierwszego.html()); //jak .innerHTML w js
    
    console.log($('p').html()); //zwraca zawartość pierwszego dopasowanego selektora
    
    
    
    
    
    //dodawanie tekstu
    $('.paragraf').text('rrr');// jesli jest jakis tekst to go podmieni na ten nowy

   
   
    
    //dodawanie  HTML
    $(".paragraf-next").html($(".paragraf-next").html() + " To jest <strong>tekst</strong>");
    
    $('')
    
    //dodanie treści na koncu selektora
    $('.paragraf-next').append(' Treść na koncu selektora');
    
    //dodanie tresci za selektorem
    $('.paragraf-next').after('Tresc za selektorem');
    
    //usuwanie
    $('#paragraf').empty(); //
    
    //dodawanie css
    $('h3, h1').css("color", "red"); //css dodawane inline
    
    $('h3').css({"color": "red", "font-size": "5em"}); 
    
    //dodanie klasy css
    $("h1, h2").addClass("klasa-testowa druga-klasa");
    
    $("h1").removeClass("class-z-html");
    
    //dodanie atrybutu
    $('h1').attr('nazwa-atrybutu', 'wartosc atrybutu'); //mozna tak dodac id
    
    
    
});