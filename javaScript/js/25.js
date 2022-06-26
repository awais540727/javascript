var ar=[
  ["a",1,"m1","ics"],
  ["b",2,"m2","ics"],
  ["c",3,"m3","ics"],
  ["d",4,"m4","ics"],
  ["d",4,"m4","ics"]
];
document.write(ar.length);

document.write("<table border='1px' cellspacing='0'>");
for (var i = 0; i < ar.length; i++) {
  document.write("<tr>");
  for(var a=0;a<ar[i].length;a++)
  {
    document.write("<td>"+ar[i][a]+"</td>"+ " ");
  }
  document.write("<br>");
  document.write("</tr>");
}
document.write("</table>");
