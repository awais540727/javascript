//var a = document.createElement("h2");
//var b = document.createTextNode("This is note");
//a.appendChild(b);
var c = document.getElementById("inner");
var a = "<h2>Hi there </h2>";
var d= c.insertAdjacentHTML("afterend",a);

console.log(d);
