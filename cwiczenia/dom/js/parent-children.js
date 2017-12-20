'use strict';

var pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);

console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.children);
console.log(pierwszyDiv.children[1]);

console.log(pierwszyDiv.firstChild);

var pierwszyDivChild = pierwszyDiv.children[1];
console.log(pierwszyDivChild.nextElementSibling);

var childNodesDiva = pierwszyDiv.childNodes;
childNodesDiva.forEach(function(element) {
 console.log(element.nodeType);
    if (element.NodeType == 1) {
    console.log(element);
}
    
    
});

