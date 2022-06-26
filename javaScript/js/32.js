var a = new Object();
a.fn = "Awais";
a.ln = "Ali";
a.salary = function(){
  return  this.fn+ " "+this.ln;
};
a.adress ={
  city : "Kasur",
  parAdress : "Bhedian kalan",
};
console.log(a);
document.write(a.adress.city);
