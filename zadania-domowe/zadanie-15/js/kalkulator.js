'use strict';

function display(text) {
    var screenElement = document.getElementById("screen");
    screenElement.value = text;
}

var ekran = "";
display(ekran);

var cleanScreen = false;

var calculated = "";

function process(buttonText) {

    if (buttonText >= "0" && buttonText <= "9") {
        if (cleanScreen) {
            ekran = "";
            cleanScreen = false;
        }
        ekran += buttonText;
        display(ekran);
        calculated += buttonText;

    } else if (buttonText == "del") {
        calculated = "";
        ekran = "";
        display(ekran);

    } else if (buttonText == ".") {
        if (cleanScreen) {
            ekran = "";
            cleanScreen = false;
        }
        
        ekran += buttonText;
        display(ekran);
        calculated += buttonText;

    } else if (buttonText == "=") {
        calculated = eval(calculated);
        display(calculated);
        cleanScreen = true;
        calculated = "";
    } else {
        calculated = eval(calculated);
        display(calculated);
        cleanScreen = true;
        calculated += buttonText;
    }
}
