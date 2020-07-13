var d= new Date();
var dd=d.getDate();
var mm=d.getMonth()+1;
var yy=d.getFullYear();

if(dd<10)
{
    dd='0'+dd;
}
if(mm<10)
{
    mm='0'+mm;
}

d= mm+'-'+dd+'-'+yy;
document.write(d);
document.write("<br>");
d = mm+'/'+dd+'/'+yy;
document.write(d);
document.write("<br>");
d = dd+'-'+mm+'-'+yy;
document.write(d);
document.write("<br>");
d = dd+'/'+mm+'/'+yy;
document.write(d);