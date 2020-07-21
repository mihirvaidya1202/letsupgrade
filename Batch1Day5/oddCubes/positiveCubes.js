var arr=[];
var b;
var odd=[];
function add()
{
    var a=document.getElementById("input").value;
    if(a>0)
    {
        arr.push(a);
    }
    if(a!="")
    {
        document.getElementById("numlist").innerHTML=`The numbers are: ${arr}`;
    }
    function oddnum(b)
    {
        return b%2!=0;
    }
    arr.forEach((b)=>{
        odd=arr.filter(oddnum);
    })
    if(odd.length!=0)
    {
        document.getElementById("oddlist").innerHTML=`The odd numbers are: ${odd}`;
    }
    console.log(odd);
    cubes=odd.map(ele=>Math.pow(ele,3));
    console.log(cubes);
    if(cubes.length!=0)
    {
        document.getElementById("cubelist").innerHTML=`Their cubes are: ${cubes}`;
    }
}   
