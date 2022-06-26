var a={
  fn : "Awais",
  ln : "Ali",
  roln: 10,
  school : "Govt",
  salary : function(){
    return 25000;
  },
  fullName : function(){
    return  this.fn+ " "+this.ln;

  },
  adress :{
    city : "Kasur",
    parAdress : "Bhedian kalan",
  }
}
console.log(a);
document.write(a.salary());
