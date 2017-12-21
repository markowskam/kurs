'use strict';



function pobierzImie(event) {
    event.preventDefault();
    var inputs = document.getElementsByTagName('input');
    for(var i=0; i < inputs.length; i++){
        if(inputs[i].value != 'Submit') {
            console.log(inputs[i].value);
        }
    }

}
