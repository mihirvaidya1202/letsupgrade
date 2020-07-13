var d = new Date();
var dayNumber = d.getDay();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
document.write("Today is: "+days[dayNumber]);
document.write("<br>");
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();
var ampm;
if(hour>=12)
{
    ampm="PM";
    hour=hour-12;
}
else if(hour<12){
    ampm="AM";
}
if (hour===0 && ampm===' PM ') 
{ 
    if (minute===0 && second===0)
    { 
        hour=12;
        ampm=' Noon';
    } 
    else
    { 
        hour=12;
        ampm=' PM';
    } 
} 
if (hour===0 && ampm===' AM ') 
{ 
    if (minute===0 && second===0)
    { 
        hour=12;
        ampm=' Midnight';
    } 
    else
    { 
        hour=12;
        ampm=' AM';
    } 
}
document.write("Current Time : "+hour + ampm + " : " + minute + " : " + second);