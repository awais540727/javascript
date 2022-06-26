 var a = document.getElementById("outer");
var b =  a.children[1];
console.log(b);
a.removeChild(b);
//a.removechild(a);
/* var a = document.getElementById("outer");
var b = document.createElement("li");
var c = document.createTextNode("Bananas");

b.appendChild(c);

var old = a.children[1];
a.replaceChild(c,old);
*/
