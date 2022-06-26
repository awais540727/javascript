var element;
//document.getElementById('inner').children.style.background ="blue";
//element = document.getElementById('outer').children[0].style.background = "red";
//element = document.getElementById('child').nextElementSibling.style.background = "red";
//var a = document.getElementById('child').previousElementSibling;

var a = document.createElement("h1");
var b = document.createTextNode("Hi this is text NOTE ");
a.appendChild(b);
//document.getElementById("inner").appendChild(a);
var c = document.getElementById("inner");
c.insertBefore(a,c.childNodes[1]);

element = document.getElementById('outer').childNodes;
console.log(element);
