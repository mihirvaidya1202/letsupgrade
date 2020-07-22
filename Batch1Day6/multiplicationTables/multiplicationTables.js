function tables()
{
    document.getElementById("tableHeading").innerHTML="";
    document.getElementById("tables").innerHTML="";
    var regex=/[0-9]/;
    var i=1;
    var n=document.getElementById("inputBox").value;
    var result=n.match(regex);
    console.log(result);
    if(n!="" && result)
    {
        document.getElementById("tableHeading").innerHTML=`The Multiplication Table of ${n} is:`;
        while(i<=20)
        {
            document.getElementById("tables").innerHTML+=`${n} * ${i} = ${n*i}<br>`;
            i++;
        }
    }
}